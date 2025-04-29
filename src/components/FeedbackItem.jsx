import React from "react";
import Card from "../shared/Card";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDeleteFeedbackMutation } from "../redux/feedbackApi";
import { setEditingItem } from "../redux/feedbackSlice";
import { useDispatch } from "react-redux";


const FeedbackItem = ({ item }) => {

    const [deleteFeedback] = useDeleteFeedbackMutation();
    const dispatch = useDispatch()

    const handleDelete = async (id) => {
       await deleteFeedback(id)
    }

    const handleEdit = () => {
        dispatch(setEditingItem(item))
    }

  return (
    <Card>
      <div className="card-wrapper">
        <h4>{item.review}</h4>

        <div>
          <div className="edit">
            <FaRegEdit onClick={handleEdit}/>
          </div>
          <div className="delete">
            <MdDelete onClick={() => handleDelete(item.id)}/>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FeedbackItem;
