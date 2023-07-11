import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';
import { ImageCardProps } from './ImageCard';

type Props = {
  images: ImageCardProps[];
  term: string;
  page: number;
  setPage: (page: number) => void;
  onSearchSubmit: (term: string, page: number) => void;
}

const ImageList: React.FC<Props>  = (props:Props) => {

  // 画面をスクロールしたら画像をもう一度取得する関数
  const handleScroll = (e:any) => {
    const element = e.target;
    const { scrollHeight, scrollTop, clientHeight } = element;
    if (scrollHeight - scrollTop === clientHeight) {
      console.log('reach end');
      const newPage = props.page + 1;
      props.setPage(newPage);
      props.onSearchSubmit(props.term, newPage);
    }
  };

  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return (
    <div
      onScroll={handleScroll}
      style={{ height: '1000px', overflow: 'scroll' }}
      className="image-list">{images}
    </div>
  );
};

export default ImageList;

