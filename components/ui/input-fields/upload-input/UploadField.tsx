import cn from 'classnames';
import Image from 'next/image';

import styles from './uploadField.module.css';

import { useUpload } from './useUpload';
import { IUploadField } from '../input.interface';
import { HeroIcon } from '../../hero-icon/Heroicon';
import { useEffect, useState } from 'react';

const UploadField = ({
  placeholder,
  error,
  style,
  images,
  folder,
  onChange,
  isNoImage = false,
}: IUploadField) => {
  const [imgList, setImgList] = useState(images);

  useEffect(() => {
    setImgList(images);
    console.log('loaded');
  }, [images]);

  const { uploadImage, isLoading } = useUpload(setImgList);
  return (
    <div className={cn(styles.field)} style={style}>
      <label className={styles.label}>
        <HeroIcon className="text-gray-500 w-6" icon="ArrowUpTrayIcon" />
        <span>{placeholder}</span>
        <input
          className={styles.upload__input}
          type="file"
          onChange={uploadImage}
        />

        {error && <div>{error.message}</div>}
      </label>

      <div className={styles.uploadImageContainer}>
        {isLoading && <h2>load images...</h2>}
        <div className={styles.uploadImageList}>
          {imgList &&
            imgList[0] &&
            Array.isArray(imgList) &&
            imgList.map((img) => (
              <div key={img} className={styles.imgContainer}>
                <Image
                  src={img}
                  alt="new img"
                  fill
                  className={styles.image}
                  unoptimized
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UploadField;
