import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address} , Kota ${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Categories</h4>
    <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
    <h4>Foods</h4>
    <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
    <h4>Drinks</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>

  <div class="restaurant__description">
  <h3>Customer Reviews</h3>
  <p>${restaurant.customerReviews.map((customer) => `${customer.name}<br>${customer.review}<br>${customer.date}`).join('<br><br>')}</p>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" crossorigin="anonymous" alt="${restaurant.name}"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating} | ${restaurant.city}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant_name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="Like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="Unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

// eslint-disable-next-line max-len, object-curly-newline
export { createRestaurantDetailTemplate, createRestaurantItemTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
