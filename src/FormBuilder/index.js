import { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Controls from "./Controls";
import Form from "./Form";
import Props from "./Props";

import { DragDropContext } from "react-beautiful-dnd";

function FormBuilder({ controls }) {
  const [formData, setFormData] = useState([]);

  const onDragEnd = (data) => {
    console.log(data);
    const { draggableId, source, destination } = data;
    if (source && destination) {
      if (source.droppableId === "controls_droppable") {
        console.log();
        const newFormControl = {
          id: `${formData.length}`,
          type: draggableId,
          config: controls.find((item) => item.value === draggableId)?.config
        };
        const newFormData = [...formData];
        newFormData.splice(destination.index, 0, newFormControl);
        setFormData(newFormData);
      }
      if (source.droppableId === "form_droppable") {
        if (source.index !== destination.index) {
          const newFormData = [...formData];
          const movedFormControl = newFormData.splice(source.index, 1)[0];
          newFormData.splice(destination.index, 0, movedFormControl);
          setFormData(newFormData);
        }
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid spacing={2} direction="row" container>
        <Grid item>
          <Controls controls={controls} />
        </Grid>
        <Grid item>
          <Form formData={formData} />
        </Grid>
        <p>{JSON.stringify(formData)}</p>
      </Grid>
      <Props />
    </DragDropContext>
  );
}

export default FormBuilder;
