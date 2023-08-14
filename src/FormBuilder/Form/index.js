import { Droppable, Draggable } from "react-beautiful-dnd";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default function FormData({ formData }) {
  const initialValues = formData.reduce((total, current) => {
    return { ...total, [current.id]: "" };
  }, {});

  const getControl = (type, id, config) => {
    return <div>{type}</div>;
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ submitForm, isSubmitting }) => (
        <Droppable droppableId="form_droppable" type="controls">
          {(provided, snapshot) => (
            <div>
              <List
                style={{
                  backgroundColor: "#f9fafb",
                  borderStyle: "dotted",
                  minHeight: "200px",
                  width: "400px",
                  overflow: "auto"
                }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {formData.map((data, index) => (
                  <Draggable
                    key={`form_draggable_${index}`}
                    draggableId={`form_draggable_${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <ListItem
                        onClick={() => alert(JSON.stringify(data))}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <Card
                          style={{
                            padding: "10px",
                            width: "100%"
                          }}
                          {...provided.dragHandleProps}
                        >
                          {getControl(data.type, data.id)}
                        </Card>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            </div>
          )}
        </Droppable>
      )}
    </Formik>
  );
}
