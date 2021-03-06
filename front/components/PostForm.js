import React, { useState, useCallback, useEffect, useRef } from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from 'react-redux';
//
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../reducers/post';
import { backUrl } from '../config/config';


const PostForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const { addPostLoading, addPostDone, imagePaths } = useSelector((state) => state.post);

    useEffect(() => {
        if (addPostDone) {
            setText('');
        }
    }, [addPostDone]);

    const onChangeText = useCallback((e) => {
        // console.log("text : " + e.target.value);
        setText(e.target.value);
    }, [text]);

    const imageInput = useRef();
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    const onChangeImages = useCallback((e) => {
        console.log('images : ', e.target.files);
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
            imageFormData.append('image', f);
        });
        console.log("imageFormData : ", imageFormData);

        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData,
        });

    });

    const onSubmitForm = useCallback(() => {
        if (!text || !text.trim()) {
            return alert('게시글을 작성하세요.');
        }
        const formData = new FormData();
        imagePaths.forEach((p) => {
            formData.append('image', p);
        });
        formData.append('content', text);
        return dispatch({
            type: ADD_POST_REQUEST,
            data: formData,
        });
    }, [text, imagePaths]);

    const onRemoveImage = useCallback((index) => () => {
        dispatch({
            type: REMOVE_IMAGE,
            data: index,
        });
    });

    return (
        <Form
            style={{ margin: "10px 0 20px" }}
            encType="multipart/form-data"
            onFinish={onSubmitForm}
        >
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder="어떤 신기한 일이 있었나요?"
            />
            <div>
                <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>

                <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={addPostLoading}>짹짹</Button>

                {imagePaths.map((v, i) => (
                    <div key={v} style={{ display: 'inline-block' }}>
                        <img src={`${backUrl}/${v}`} style={{ width: '200px' }} alt={v} />
                        <div>
                            {/* <Button >제거</Button> */}
                            <Button onClick={onRemoveImage(i)}>제거</Button>
                        </div>
                    </div>
                ))}

            </div>
        </Form>
    );
}

export default PostForm;