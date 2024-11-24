import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import {
    Card
  } from "@/components/ui/card";

interface Task {
  id: string;
  content: string;
}

interface Lane {
  id: string;
  title: string;
  taskIds: string[];
}

interface Data {
  tasks: { [key: string]: Task };
  lanes: { [key: string]: Lane };
  laneOrder: string[];
}

const ProjectBoard: React.FC = () => {
  const initialData: Data = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Design Homepage' },
      'task-2': { id: 'task-2', content: 'Set up CI/CD pipeline' },
      'task-3': { id: 'task-3', content: 'Write unit tests' },
      'task-4': { id: 'task-4', content: 'Deploy to production' },
    },
    lanes: {
      'lane-1': { id: 'lane-1', title: 'To Do', taskIds: ['task-1', 'task-2'] },
      'lane-2': { id: 'lane-2', title: 'In Progress', taskIds: ['task-3'] },
      'lane-3': { id: 'lane-3', title: 'Done', taskIds: ['task-4'] },
    },
    laneOrder: ['lane-1', 'lane-2', 'lane-3'],
  };

  const [data, setData] = useState<Data>(initialData);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    const startLane = data.lanes[source.droppableId];
    const endLane = data.lanes[destination.droppableId];

    if (startLane === endLane) {
      const newTaskIds = Array.from(startLane.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newLane = { ...startLane, taskIds: newTaskIds };
      const newState: Data = {
        ...data,
        lanes: { ...data.lanes, [newLane.id]: newLane },
      };
      setData(newState);
      return;
    }

    const startTaskIds = Array.from(startLane.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStartLane = { ...startLane, taskIds: startTaskIds };

    const endTaskIds = Array.from(endLane.taskIds);
    endTaskIds.splice(destination.index, 0, draggableId);
    const newEndLane = { ...endLane, taskIds: endTaskIds };

    const newState: Data = {
      ...data,
      lanes: {
        ...data.lanes,
        [newStartLane.id]: newStartLane,
        [newEndLane.id]: newEndLane,
      },
    };
    setData(newState);
  };

  return (
    <Card>
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex space-x-4 p-6 overflow-auto h-screen">
        {data.laneOrder.map((laneId) => {
          const lane = data.lanes[laneId];
          const tasks = lane.taskIds.map((taskId) => data.tasks[taskId]);

          return (
            <Droppable key={lane.id} droppableId={lane.id}>
              {(provided) => (
                <div
                  className="bg-gray-100 p-4 rounded-lg w-1/4 min-w-[250px]"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h2 className="text-lg font-bold mb-4">{lane.title}</h2>
                  {tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white shadow-md rounded p-4 mb-2"
                        >
                          {task.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
    </Card>
  );
};

export default ProjectBoard;
