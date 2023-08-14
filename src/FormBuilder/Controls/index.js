import { Droppable, Draggable } from "react-beautiful-dnd";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import TextFieldsIcon from "@material-ui/icons/TextFields";

function Controls({ controls = [] }) {
  return (
    <Droppable
      droppableId="controls_droppable"
      type="controls"
      isDropDisabled={true}
    >
      {(provided, snapshot) => (
        <List
          style={{ backgroundColor: "#005f8c" }}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {controls.map((control, index) => (
            <Draggable
              key={`control_draggable_${control.value}`}
              draggableId={control.value}
              index={index}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <ListItem
                    key={control.value}
                    style={{ backgroundColor: "#005f8c" }}
                  >
                    <ListItemIcon>
                      <TextFieldsIcon style={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText style={{ color: "white" }}>
                      {control.label}
                    </ListItemText>
                  </ListItem>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </List>
      )}
    </Droppable>
  );
}

export default Controls;
