import React, { useRef, useState } from "react";

import { DailyLifePost } from "../../../types/dataModel";
import Article from "../../atoms/Article/Article";
import ArticleContentsContainer from "../../atoms/Container/ArticleContentsContainer";
import CenterFixedContainer from "../../atoms/Container/CenterFixedContainer";
import CustomContainer from "../../atoms/Container/CustomContainer";
import ModalContentsContainer from "../../atoms/Container/ModalContentsContainer";
import ArticleHeader from "../../atoms/Header/ArticleHeader";
import ModalPortal from "../../atoms/Portal/ModalPortal";
import PostRemoveButton from "../Button/PostRemoveButton";
import PostUpdateButton from "../Button/PostUpdateButton";
import DailyLifePostUpdateForm from "../Form/DailyLifePostUpdateForm";
import ArticleImgContents from "../Img/ArticleImgContents";

interface DailyLifePostItemProps {
  dailyLifePost: DailyLifePost;
  setLastItem?: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

export default function DailyLifePostItem({
  dailyLifePost,
  setLastItem,
}: DailyLifePostItemProps): JSX.Element {
  const updateFormOpenButtonRef = useRef<HTMLButtonElement>(null);
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  const handleShowForm = () => {
    setIsUpdateFormVisible(true);
  };

  const handleHideForm = () => {
    setIsUpdateFormVisible(false);

    updateFormOpenButtonRef.current?.focus();
  };

  const { id, title, content, imageURL, imagePath, requestedAt } =
    dailyLifePost;
  const dateOption = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  } as const;

  return (
    <Article ref={setLastItem}>
      <ArticleHeader>
        <h3>{title}</h3>
        <CustomContainer align="spaceBetweenCenter" width="100%">
          <time>
            {requestedAt.toDate().toLocaleString("ko-KR", dateOption)}
          </time>
          <CustomContainer gap="small">
            <PostRemoveButton id={id} imagePath={imagePath} />
            <PostUpdateButton
              buttonRef={updateFormOpenButtonRef}
              handleShowForm={handleShowForm}
            />
          </CustomContainer>
        </CustomContainer>
      </ArticleHeader>
      <ArticleContentsContainer>
        {imageURL ? (
          <ArticleImgContents
            src={imageURL}
            alt="이미지 파일입니다."
            textContent={content}
          />
        ) : (
          <p>{content}</p>
        )}
      </ArticleContentsContainer>
      {isUpdateFormVisible && (
        <ModalPortal>
          <DailyLifePostUpdateForm
            handleHideForm={handleHideForm}
            prevDailyLifePost={dailyLifePost}
          />
        </ModalPortal>
      )}
    </Article>
  );
}
