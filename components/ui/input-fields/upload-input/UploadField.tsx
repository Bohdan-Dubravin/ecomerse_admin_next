import cn from "classnames";
import styles from "./uploadField.module.css";
import { useUpload } from "./useUpload";
import { IUploadField } from "../input.interface";
import { HeroIcon } from "../../hero-icon/Heroicon";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { ReactSortable } from "react-sortablejs";

const UploadField = ({
  placeholder,
  error,
  style,
  images,

  setCurrentImages,
}: IUploadField) => {
  const [imgList, setImgList] = useState(images);

  useEffect(() => {
    setImgList(images);
  }, [images]);

  const updateImgOrder = (sortedImages: string[]) => {
    setImgList(sortedImages);
    setCurrentImages(sortedImages);
  };

  const { uploadImage, isLoading } = useUpload(setImgList, setCurrentImages);
  return (
    <div className={cn(styles.field)} style={style}>
      <label className={styles.label}>
        {!isLoading && (
          <HeroIcon className="text-gray-500 w-6" icon="ArrowUpTrayIcon" />
        )}
        <span>{isLoading ? <ClipLoader color="#6B7280" /> : placeholder}</span>
        <input
          className={styles.upload__input}
          type="file"
          onChange={uploadImage}
        />

        {error && <div>{error.message}</div>}
      </label>

      <div className={styles.uploadImageContainer}>
        <h2 className={styles.title}>Drag and drop to change images order</h2>

        <ReactSortable
          className={styles.uploadImageList}
          //@ts-ignore
          list={imgList}
          //@ts-ignore
          setList={updateImgOrder}
        >
          {imgList && imgList[0] && Array.isArray(imgList) ? (
            imgList.map((img) => (
              <div key={img} className={styles.imgContainer}>
                <img src={img} alt="new img" className={styles.image} />
              </div>
            ))
          ) : (
            <h3>No image in this product add new one</h3>
          )}
        </ReactSortable>
      </div>
    </div>
  );
};

export default UploadField;
