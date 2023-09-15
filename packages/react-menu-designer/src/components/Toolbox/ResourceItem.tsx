import { memo, useRef } from "react"
import styled from 'styled-components';
import { useResource } from "../../hooks/useResource";
import { DragOverlay, useDraggable } from "@dnd-kit/core";
import { floatShadow, getChildCount } from "../../utilities";
import { createPortal } from "react-dom";
import { dropAnimationConfig } from "../SortableTree/dropAnimationConfig";
import { SortableTreeItem } from "../TreeItem";


const Container = styled.div`
  position: relative;
  height: 48px;
  box-sizing: border-box;
  width: 100%;
  margin: 8px 0;
`

const Item = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  border-radius: 8px;
  border: solid 1px ${props => props.theme.token?.colorBorder};
  user-select: none;
  &.dragging{
    opacity: 0.6;
    background-color: ${props => props.theme.token?.colorBgContainer};
    box-shadow: ${floatShadow};
    z-index: 1;
    pointer-events: none;
    color:${props => props.theme.token?.colorText};
  }
`

export const ResourceItem = memo((
  props: { name: string }
) => {
  const { name } = props
  const ref = useRef<HTMLDivElement>(null)
  const resource = useResource(name)

  const { attributes, listeners, isDragging, setNodeRef } = useDraggable({
    id: name,
    data: {
      resource
    }
  });


  return (
    <Container ref={ref}>
      <Item
        ref={setNodeRef}
        className={isDragging ? "dragging" : undefined}
        {...listeners}
        {...attributes}
      >
        {
          resource?.title
        }
      </Item>
      {
        isDragging && createPortal(//如果是新增项目，不显示鼠标跟随
          <DragOverlay
            dropAnimation={dropAnimationConfig}
          >
            <Item
              className={"dragging"}
            >
              {
                resource?.title
              }
            </Item>
          </DragOverlay>,
          document.body
        )}
    </Container>
  )
})