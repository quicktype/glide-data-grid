import { Rectangle } from "data-grid/data-grid-types";
import { styled } from "../../common/styles";

interface Props {
    targetRect: Rectangle;
}
export const MarkdownOverlayEditorStyle = styled.div<Props>`
    min-width: ${p => p.targetRect.width}px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: ${p => p.theme.fgColorDark};

    .edit-icon {
        position: absolute;
        top: 4px;
        right: 4px;
        width: 24px;
        height: 24px;
        color: ${p => p.theme.acceptColor};

        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;

        > * {
            width: 24px;
            height: 24px;
        }
    }

    .md-edit-textarea {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 0px;
        height: 0px;
        margin-top: 25px;
        opacity: 0;
    }
`;
