import React, { useEffect, useState } from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";
import { useAddFeedbackMutation, useUpdateFeedbackMutation } from "../redux/feedbackApi";
import { useDispatch, useSelector } from "react-redux";
import { clearEditingItem } from "../redux/feedbackSlice";

const FeedbackForm = () => {
  const [inputText, setInputText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(null);

  const editingItem = useSelector((state) => state.feedbackState.editingItem);
  
  const dispatch = useDispatch()

  const [addFeedback] = useAddFeedbackMutation();
  const [updateFeedback] = useUpdateFeedbackMutation();

  useEffect(() => {
    if(editingItem) {
        setInputText(editingItem.review)
        setBtnDisabled(false)
    }
  }, [editingItem])

  const handleInputChange = (e) => {
    const trimmedText = e.target.value.trimStart();
    let textError = '';

    if (trimmedText.length < 10) {
      textError = "Review must be at least 10 characters long";
      setMessage(textError);
      setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
    setInputText(trimmedText);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("FORM SUBMITTED");

    const newFeedback = {
      review: inputText,
    };

    if(editingItem) {
        await updateFeedback({id: editingItem.id, updateFeedback: newFeedback})
        dispatch(clearEditingItem());
    } else {
        await addFeedback(newFeedback);
    }

    setInputText("");
    setBtnDisabled(true);
  };

  return (
    <Card>
      <h3>Add you Reviews</h3>
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Review..."
          value={inputText}
          onChange={handleInputChange}
        />
        <Button type="submit" version="primary" isDisabled={btnDisabled}>
          Send
        </Button>
      </form>
      <p className="message">{message && message}</p>
    </Card>
  );
};

export default FeedbackForm;
