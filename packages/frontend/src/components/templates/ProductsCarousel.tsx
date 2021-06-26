import { FC } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IProduct } from '../../types/products';
import Product from '../molecules/Product';
import Subtitle from '../atoms/Subtitle';
import { useMedia } from '../../hooks/useMedia';
import { mediaFrom768 } from '../../helpers/mediaQueries';

SwiperCore.use([Navigation, Scrollbar, Pagination, EffectCoverflow]);

const ProductsCarousel: FC<IProductsCarouselProps> = ({ products, text }) => {
  const isTablet = useMedia(mediaFrom768);

  return (
    <div style={{ margin: '20px 0' }}>
      <Subtitle text={text} />
      <Swiper
        tag="section"
        slidesPerView={2}
        spaceBetween={15}
        style={{ padding: '0 10px' }}
        pagination={{ dynamicBullets: true }}
      >
        {products?.map((item) => (
          <SwiperSlide key={item.id}>
            <Product
              id={item.id}
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

interface IProductsCarouselProps {
  products: IProduct[];
  text: string;
}

export default ProductsCarousel;
