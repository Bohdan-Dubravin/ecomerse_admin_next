import cn from 'classnames';
import Image from 'next/image';

import styles from './uploadField.module.css';

import { useUpload } from './useUpload';
import { IUploadField } from '../input.interface';
import { HeroIcon } from '../../hero-icon/Heroicon';

const UploadField = ({
  placeholder,
  error,
  style,
  image,
  folder,
  onChange,
  isNoImage = false,
}: IUploadField) => {
  const { uploadImage, isLoading } = useUpload(onChange, folder);

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
      {!isNoImage && (
        <div className={styles.uploadImageContainer}>
          {isLoading ? (
            <h2>load image...</h2>
          ) : (
            image && <Image src={image} alt="new img" fill unoptimized />
          )}
        </div>
      )}
    </div>
  );
};

export default UploadField;
