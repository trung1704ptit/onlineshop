import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";

export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ImArrowRight2 />
    </div>
  );
}

export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ImArrowLeft2 />
    </div>
  );
}

export function roundPrice(price, qty) {
  return (price * qty).toFixed(2);
}

export function findCategory(id, categoryList) {
  let result = null;
  for (let item of categoryList) {
    if (item.id === id || item.slug === id) {
      return item;
    } else if (item.sub && item.sub.length > 0) {
      result = findCategory(id, item.sub);
      if (result) {
        return result;
      }
    }
  }

  return result;
}

function findBrand(id, brandList) {
  return brandList.find(item => item.id === id);
}


export function getCategories(productCategories, allCategories) {
  if (productCategories && allCategories) {
    return productCategories.map(categoryId => findCategory(categoryId, allCategories)).filter(item => item)
  }
  return []
}

export function getBrand(productBrands, allBrands) {
  if (productBrands && allBrands) {
    return productBrands.map(brandId => findBrand(brandId, allBrands)).filter(item => item)
  }
  return []
}

export function getCategoriesTree(categorySlug, allCategories) {
  
}