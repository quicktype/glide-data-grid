import React from "react";
import { CompactSelection, GridSelection, Slice } from "./data-grid-types";

type SetCallback = (newVal: GridSelection, expand: boolean) => void;

export type SelectionBehavior = "exclusive" | "mixed";

type SelectionTrigger = "click" | "drag" | "keyboard-nav" | "keyboard-select" | "edit";

export function useSelectionBehavior(
    gridSelection: GridSelection,
    setGridSelection: SetCallback,
    rangeBehavior: SelectionBehavior,
    columnBehavior: SelectionBehavior,
    rowBehavior: SelectionBehavior,
    rangeMultiselection: boolean
) {
    // if append is true, the current range will be added to the rangeStack
    const setCurrent = React.useCallback(
        (
            current: Pick<NonNullable<GridSelection["current"]>, "cell" | "range"> | undefined,
            expand: boolean,
            append: boolean,
            trigger: SelectionTrigger
        ) => {
            append = append && rangeMultiselection;
            const allowColumnCoSelect =
                columnBehavior === "mixed" && rangeBehavior === "mixed" && (append || trigger === "drag");
            const allowRowCoSelect =
                rowBehavior === "mixed" && rangeBehavior === "mixed" && (append || trigger === "drag");
            let newVal: GridSelection = {
                current:
                    current === undefined
                        ? undefined
                        : {
                              ...current,
                              rangeStack: trigger === "drag" ? gridSelection.current?.rangeStack ?? [] : [],
                          },
                columns: allowColumnCoSelect ? gridSelection.columns : CompactSelection.empty(),
                rows: allowRowCoSelect ? gridSelection.rows : CompactSelection.empty(),
            };

            if (append && newVal.current !== undefined && gridSelection.current !== undefined) {
                newVal = {
                    ...newVal,
                    current: {
                        ...newVal.current,
                        rangeStack: [...gridSelection.current.rangeStack, gridSelection.current.range],
                    },
                };
            }
            setGridSelection(newVal, expand);
        },
        [columnBehavior, gridSelection, rangeBehavior, rangeMultiselection, rowBehavior, setGridSelection]
    );

    const setSelectedRows = React.useCallback(
        (newRows: CompactSelection | undefined, append: Slice | number | undefined, allowMixed: boolean): void => {
            newRows = newRows ?? gridSelection.rows;
            allowMixed = allowMixed || gridSelection.current === undefined;
            if (append !== undefined) {
                newRows = newRows.add(append);
            }
            let newVal: GridSelection;
            if (rowBehavior === "exclusive" && newRows.length !== 0) {
                newVal = {
                    current: undefined,
                    columns: CompactSelection.empty(),
                    rows: newRows,
                };
            } else {
                const rangeMixed = allowMixed && rangeBehavior === "mixed";
                const columnMixed = allowMixed && columnBehavior === "mixed";
                const current = !rangeMixed ? undefined : gridSelection.current;
                newVal = {
                    current,
                    columns: columnMixed ? gridSelection.columns : CompactSelection.empty(),
                    rows: newRows,
                };
            }
            setGridSelection(newVal, false);
        },
        [columnBehavior, gridSelection, rangeBehavior, rowBehavior, setGridSelection]
    );

    const setSelectedColumns = React.useCallback(
        (newCols: CompactSelection | undefined, append: number | Slice | undefined, allowMixed: boolean): void => {
            newCols = newCols ?? gridSelection.columns;
            allowMixed = allowMixed || gridSelection.current === undefined;
            if (append !== undefined) {
                newCols = newCols.add(append);
            }
            let newVal: GridSelection;
            if (columnBehavior === "exclusive" && newCols.length !== 0) {
                newVal = {
                    current: undefined,
                    rows: CompactSelection.empty(),
                    columns: newCols,
                };
            } else {
                const rangeMixed = allowMixed && rangeBehavior === "mixed";
                const rowMixed = allowMixed && rowBehavior === "mixed";
                const current = !rangeMixed ? undefined : gridSelection.current;
                newVal = {
                    current,
                    rows: rowMixed ? gridSelection.rows : CompactSelection.empty(),
                    columns: newCols,
                };
            }
            setGridSelection(newVal, false);
        },
        [columnBehavior, gridSelection, rangeBehavior, rowBehavior, setGridSelection]
    );

    return [setCurrent, setSelectedRows, setSelectedColumns] as const;
}