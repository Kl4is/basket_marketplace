/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Basket.js":
/*!**********************************!*\
  !*** ./src/components/Basket.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Basket)
/* harmony export */ });
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _utils_getEndLine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getEndLine.js */ "./src/utils/getEndLine.js");



class Basket {
  constructor(basketSetting, productList, {
    renderDeliveries
  }) {
    this._basketSetting = basketSetting;
    this._initialProductList = productList;
    this._productList = productList;
    this._productListMissingContainer = document.querySelector(this._basketSetting.productListMissingContainerSelector);
    this._renderDeliveries = renderDeliveries;
    this._accordionProductCountElement = document.querySelector(this._basketSetting.basketAccordionProductCountSelector);
    this._accordionProductCount = null;
    this._accordionProductPriceElement = document.querySelector(this._basketSetting.basketAccordionProductPriceSelector);
    this._accordionProductPrice = null;
    this._accordionCheckboxAllProduct = document.querySelector(this._basketSetting.accordionCheckboxAllProductSelector);
    this._accordionCheckboxAllProductDecor = document.querySelector(this._basketSetting.accordionCheckboxAllProductDecorSelector);
    this._cardIcons = document.querySelectorAll(this._basketSetting.cardIconSelector);
    this._cardNumbers = document.querySelectorAll(this._basketSetting.cardNumberSelector);
    this._cardDates = document.querySelectorAll(this._basketSetting.cardDateSelector);
    this._pickupType = document.querySelector(this._basketSetting.pickupTypeSelector);
    this._pickupSidebarType = document.querySelector(this._basketSetting.pickupSidebarTypeSelector);
    this._pickupData = document.querySelector(this._basketSetting.pickupDataSelector);
    this._pickupAddress = document.querySelector(this._basketSetting.pickupAddressSelector);
    this._pickupSidebarAddress = document.querySelector(this._basketSetting.pickupSidebarAddressSelector);
    this._pickupRate = document.querySelector(this._basketSetting.pickupRateSelector);
    this._pickupOfficeHours = document.querySelector(this._basketSetting.pickupOfficeHoursSelector);
    this._basketTotalPrice = document.querySelector(this._basketSetting.basketTotalPriceSelector);
    this._basketTotalCount = document.querySelector(this._basketSetting.basketTotalCountSelector);
    this._basketTotalOldPrice = document.querySelector(this._basketSetting.basketTotalOldPriceSelector);
    this._basketTotalDiscount = document.querySelector(this._basketSetting.basketTotalDiscountSelector);
    this._basketTotalDeliveryDate = document.querySelector(this._basketSetting.basketTotalDeliveryDateSelector);
    this._basketDeliveryDateItemList = document.querySelector(this._basketSetting.basketDeliveryDateItemListSelector);
    this._basketCheckboxPaymentType = document.querySelector(this._basketSetting.basketCheckboxPaymentTypeSelector);
    this._basketCheckboxPaymentTypeDecor = document.querySelector(this._basketSetting.basketCheckboxPaymentTypeDecorSelector);
    this._basketTotalBtnSubmit = document.querySelector(this._basketSetting.basketTotalBtnSubmitSelector);
    this._headerIconCounter = document.querySelector(this._basketSetting.headerIconCounterSelector);
    this._navbarMobileIconCounter = document.querySelector(this._basketSetting.navbarMobileIconCounterSelector);
    this._totalPrice = null;
    this._totalCount = null;
    this._count = null;
    this._totalOldPrice = null;
    this._totalDiscount = null;
    this.allProductCheckboxIsChecked = false;
  }

  // total discount

  _renderTotalDiscount = () => {
    this._basketTotalDiscount.textContent = `−${this._totalDiscount.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} сом`;
  };
  decreaseTotalDiscount = value => {
    this._totalDiscount -= value;
    this._renderTotalDiscount();
  };
  increaseTotalDiscount = value => {
    // +
    this._totalDiscount += value;
    this._renderTotalDiscount();
  };

  // total old price

  _renderTotalOldPrice = () => {
    this._basketTotalOldPrice.textContent = `${this._totalOldPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} сом`;
  };
  decreaseTotalOldPrice = value => {
    this._totalOldPrice -= value;
    this._renderTotalOldPrice();
  };
  increaseTotalOldPrice = value => {
    // +
    this._totalOldPrice += value;
    this._renderTotalOldPrice();
  };

  // total count

  _renderTotalCount = () => {
    this._basketTotalCount.textContent = `${this._totalCount} ${(0,_utils_getEndLine_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this._totalCount, _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.productsTitles)}`;

    // change text in btn, else check input
    this._changeTextTotalBtn();
  };
  decreaseTotalCount = count => {
    this._totalCount -= count;
    this._renderTotalCount();
  };
  increaseTotalCount = count => {
    // +
    this._totalCount += count;
    this._renderTotalCount();
  };

  // count

  _renderCount = () => {
    if (this._count <= 0) {
      this._headerIconCounter.textContent = '';
      this._navbarMobileIconCounter.textContent = '';
    } else {
      this._headerIconCounter.textContent = this._count.toString();
      this._navbarMobileIconCounter.textContent = this._count.toString();
    }
  };
  decreaseCount = value => {
    this._count -= value;
    this._renderCount();
  };
  increaseCount = value => {
    // +
    this._count += value;
    this._renderCount();
  };

  // total price

  _renderTotalPrice = () => {
    this._basketTotalPrice.textContent = `${this._totalPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} сом`;
  };
  decreaseTotalPrice = value => {
    this._totalPrice -= value;
    this._renderTotalPrice();
    if (!this.checkInputProducts()) {
      this.disableInputAllProduct();
    }
  };
  increaseTotalPrice = value => {
    // +
    this._totalPrice += value;
    this._renderTotalPrice();
    if (this.checkInputProducts()) {
      this.enableInputAllProduct();
    }
  };

  // delivery date

  _renderTotalDeliveryDate = (firstDate, lastDate) => {
    const firstMonth = firstDate.getMonth();
    const lastMonth = firstDate.getMonth();
    if (firstMonth === lastMonth) {
      this._basketTotalDeliveryDate.textContent = `${firstDate.getDate()}-${lastDate.getDate()} ${_utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.deliveryMonthTitles[lastMonth].substring(0, 3)}`;
    } else {
      this._basketTotalDeliveryDate.textContent = `${firstDate.getDate()} ${_utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.deliveryMonthTitles[firstMonth].substring(0, 3)}-${lastDate.getDate()} ${_utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.deliveryMonthTitles[lastMonth].substring(0, 3)}`;
    }
  };
  _calculateDeliveryDate = arrayList => {
    if (arrayList.length) {
      const arrayDataItems = [];
      const arrayDataItemsResult = [];
      let firstDate = Infinity;
      let lastDate = -Infinity;
      arrayList.forEach(product => {
        product.deliveryDate.forEach(date => {
          for (let count in date) {
            // for date sidebar
            if (Date.parse(date[count][0]) < firstDate) firstDate = new Date(date[count][0]);
            if (Date.parse(date[count][1]) > lastDate) lastDate = new Date(date[count][1]);
          }
          ;
        });
        product.deliveryDate.forEach(count => {
          arrayDataItems.push({
            date: [Object.values(count)[0][0], Object.values(count)[0][1]],
            item: [{
              count: Object.keys(count)[0],
              image: product.image
            }]
          });
        });
      });
      arrayDataItems.forEach(data => {
        if (!arrayDataItemsResult.length) {
          // first element
          arrayDataItemsResult.push({
            date: [Object.values(data)[0][0], Object.values(data)[0][1]],
            item: [{
              count: data.item[0].count,
              image: data.item[0].image
            }]
          } // change count
          );
        } else {
          // add item in date
          for (let i = 0; i < arrayDataItemsResult.length; i++) {
            if (Date.parse(new Date(arrayDataItemsResult[i].date[0])) === Date.parse(new Date(Object.values(data)[0][0])) && Date.parse(new Date(arrayDataItemsResult[i].date[0])) === Date.parse(new Date(Object.values(data)[0][0]))) {
              arrayDataItemsResult[i].item.push({
                count: data.item[0].count,
                image: data.item[0].image
              });
              return;
            }
          }

          // add new item
          arrayDataItemsResult.push({
            date: [Object.values(data)[0][0], Object.values(data)[0][1]],
            item: [{
              count: data.item[0].count,
              image: data.item[0].image
            }]
          });
        }
      });
      this._renderTotalDeliveryDate(firstDate, lastDate);
      const deliverySlice = this._renderDeliveries(arrayDataItemsResult);
      deliverySlice.removeItems();
      deliverySlice.renderItems();
    } else {
      const deliverySlice = this._renderDeliveries();
      deliverySlice.removeItems();
    }
  };

  // product missing

  setProductMissing = item => {
    this._productListMissingContainer.prepend(item);
  };

  // accordion price

  _renderPriceBasket = () => {
    this._accordionProductPriceElement.textContent = `${this._accordionProductPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} сом`;
  };
  decreasePriceBasket = () => {
    this._renderPriceBasket(-value);
  };
  increasePriceBasket = value => {
    // +
    this._accordionProductPrice += value;
    this._renderPriceBasket(this._accordionProductPrice);
  };

  // accordion counter

  _renderCounterBasket = value => {
    this._accordionProductCountElement.textContent = `${value} ${(0,_utils_getEndLine_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.productsTitles)}`;
  };
  decreaseCounterBasket = () => {
    this._renderCounterBasket(this._accordionProductCount -= 1);
  };
  increaseCounterBasket = () => {
    // +
    this._renderCounterBasket(this._accordionProductCount += 1);
  };

  // cards

  _renderCards = card => {
    this._cardIcons.forEach(icon => icon.src = card.data.cardUrlIcon);
    this._cardNumbers.forEach(number => number.textContent = card.data.cardNumber);
    this._cardDates.forEach(date => date.textContent = card.data.cardDate);
  };
  changeCard = card => {
    this._renderCards(card);
  };

  // address delivery

  _renderAddress = address => {
    this._pickupAddress.textContent = address.data.address;
    this._pickupSidebarAddress.textContent = address.data.address;
    if (address.templateSelector === this._basketSetting.pickupTemplateSelector) {
      this._pickupType.textContent = this._basketSetting.pickupTypeText;
      this._pickupSidebarType.textContent = this._basketSetting.pickupSidebarTypeText;
      this._pickupData.classList.remove(this._basketSetting.pickupDataHideClass);
      this._pickupRate.textContent = address.data.rate;
      this._pickupOfficeHours.textContent = address.data.officeHours;
    } else {
      this._pickupType.textContent = this._basketSetting.pickupPointTypeText;
      this._pickupData.classList.add(this._basketSetting.pickupDataHideClass);
      this._pickupSidebarType.textContent = this._basketSetting.pickupPointSidebarTypeText;
    }
  };
  changeAddress = address => {
    this._renderAddress(address);
  };

  // products

  changeCountProductListArray = (productId, count) => {
    for (let i = 0; i < this._productList.length; i++) {
      if (this._productList[i].id === productId) {
        // get count last date
        const [countDate] = Object.keys(this._productList[i].deliveryDate[this._productList[i].deliveryDate.length - 1]);
        // get dates array
        const valuesDate = Object.values(this._productList[i].deliveryDate[this._productList[i].deliveryDate.length - 1][countDate]);
        // create new object
        const newObj = {
          [count]: valuesDate
        };
        // add new obj
        this._productList[i].deliveryDate[this._productList[i].deliveryDate.length - 1] = newObj;
        // remove old obj
        delete this._productList[i].deliveryDate[this._productList[i].deliveryDate.length - 1][countDate];
        i = this._productList.length + 1;
      }
    }
    this._calculateDeliveryDate(this._productList);
  };
  removeProductInListArray = idForDeleteCard => {
    this._productList = this._productList.filter(item => item.id !== idForDeleteCard);
    this._calculateDeliveryDate(this._productList);
  };
  addInicialProductInListArray = () => {
    this._calculateDeliveryDate(this._productList);
  };
  addProductInListArray = productItem => {
    this._productList = this._productList.filter(item => item.id !== productItem.id);
    this._productList.push(productItem);
    this._calculateDeliveryDate(this._productList);
  };
  enableInputAllProduct = () => {
    this.allProductCheckboxIsChecked = true;
    this._accordionCheckboxAllProduct.checked = true;
  };
  disableInputAllProduct = () => {
    this.allProductCheckboxIsChecked = false;
    this._accordionCheckboxAllProduct.checked = false;
  };
  enableAllProducts = () => {
    this.enableInputAllProduct();
    this._initialProductList.forEach(product => {
      if (!product.isChecked) {
        product.enableInput();
      }
      ;
    });
  };
  checkInputProducts = () => {
    return this._initialProductList.every(product => product.isChecked);
  };

  // total checkbox and btn submit

  _changeTextTotalBtn = () => {
    if (this._basketCheckboxPaymentType.checked) {
      this._totalPrice.toString().length > 5 ? this._basketTotalBtnSubmit.classList.add(this._basketSetting.basketOrderBtnSmallTextClass) : this._basketTotalBtnSubmit.classList.remove(this._basketSetting.basketOrderBtnSmallTextClass);
      this._basketTotalBtnSubmit.textContent = `Оплатить ${this._totalPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} сом`;
    } else {
      this._basketTotalBtnSubmit.classList.remove(this._basketSetting.basketOrderBtnSmallTextClass);
      this._basketTotalBtnSubmit.textContent = 'Заказать';
    }
  };
  _toggleInputPaymentType = () => {
    this._basketCheckboxPaymentType.checked = !this._basketCheckboxPaymentType.checked;
    this._changeTextTotalBtn();
  };

  // set listeners

  setEventListeners = () => {
    this._accordionCheckboxAllProductDecor.addEventListener('click', () => {
      if (!this.allProductCheckboxIsChecked) {
        this.enableAllProducts();
      } else {
        this.disableInputAllProduct();
        this._initialProductList.forEach(product => {
          if (product.isChecked) {
            product.disableInput();
          }
          ;
        });
      }
    });
    this._basketCheckboxPaymentTypeDecor.addEventListener('click', () => {
      this._toggleInputPaymentType();
    });
  };
}

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
class Card {
  constructor(data, cardSetting, disabledAllInputs) {
    this.data = data;
    this._cardSetting = cardSetting;
    this.isChecked = false;
    this._disabledAllInputs = disabledAllInputs;
  }
  _getTemplate = () => {
    const cardElement = document.querySelector(this._cardSetting.cardTemplateSelector).content.querySelector(this._cardSetting.cardSelector).cloneNode(true);
    return cardElement;
  };
  _setEventListener = () => {
    this._cardInputDecor.addEventListener('click', () => {
      if (!this.isChecked) {
        this._disabledAllInputs();
        this.enableInput();
      }
    });
  };
  enableInput = () => {
    this.isChecked = true;
    this._cardInput.checked = true;
  };
  disableInput = () => {
    this.isChecked = false;
    this._cardInput.checked = false;
  };
  generateCard = () => {
    this._card = this._getTemplate();
    this._card.querySelector(this._cardSetting.cardNumberSelector).textContent = this.data.cardNumber;
    this._card.querySelector(this._cardSetting.cardIconSelector).src = this.data.cardUrlIcon;
    this._cardInput = this._card.querySelector(this._cardSetting.cardInputSelecor);
    this._cardInputDecor = this._card.querySelector(this._cardSetting.cardInputDecorSelecor);
    this._setEventListener();
    return this._card;
  };
}

/***/ }),

/***/ "./src/components/Delivery.js":
/*!************************************!*\
  !*** ./src/components/Delivery.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Delivery)
/* harmony export */ });
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");

class Delivery {
  constructor(data, deliveryDateItemSetting) {
    this._data = data;
    this._dataItems = this._data.item;
    this._deliveryDateItemSetting = deliveryDateItemSetting;
  }
  _getDeliveryItemTemplate = () => {
    const deliveryItemElement = document.querySelector('#basket-delivery-item').content.querySelector('.delivery__item-img').cloneNode(true);
    return deliveryItemElement;
  };
  _generateDeliveryItem = item => {
    this._deliveryDateItem = this._getDeliveryItemTemplate();
    this._deliveryDateItem.querySelector('.delivery__product-img').src = item.image;
    this._deliveryDateItem.querySelector('.delivery__count-label').textContent = item.count;
    return this._deliveryDateItem;
  };
  _getDates = () => {
    const firstDate = new Date(this._data.date[0]).getDate();
    const lastDate = new Date(this._data.date[1]).getDate();
    const month = new Date(this._data.date[1]).getMonth();
    return `${firstDate}—${lastDate} ${_utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.deliveryMonthTitles[month]}`;
  };
  _getDeliveryTemplate = () => {
    const deliveryElement = document.querySelector('#basket-delivery').content.querySelector('.delivery__item').cloneNode(true);
    return deliveryElement;
  };
  generateDelivery = () => {
    this._deliveryDate = this._getDeliveryTemplate();
    this._deliveryDate.querySelector('.delivery__label').textContent = this._getDates();
    this._deliveryItemContainer = this._deliveryDate.querySelector('.delivery__product-list');
    this._dataItems.forEach(item => {
      this._deliveryItemContainer.prepend(this._generateDeliveryItem(item));
    });
    return this._deliveryDate;
  };
}

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidator)
/* harmony export */ });


class FormValidator {
  constructor(formSetting, form) {
    this._formSetting = formSetting;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._formSetting.inputSelector));
    this._buttonElement = this._form.querySelector(this._formSetting.submitButtonSelector);
  }
  _hasInvalidInput = () => {
    return this._inputList.some(inputElement => !inputElement.validity.valid);
  };
  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.disabled = false;
    }
  };
  _hideInputError = inputElement => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._formSetting.inputErrorClass);
    errorElement.classList.remove(this._formSetting.errorClass);
  };
  _showInputError = inputElement => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._formSetting.inputErrorClass);
    errorElement.classList.add(this._formSetting.errorClass);
  };
  _checkInputValidity = inputElement => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage); // check
    } else {
      this._hideInputError(inputElement);
    }
  };
  _setEventListeners() {
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('change', () => {
        if (inputElement.value.length) {
          this._checkInputValidity(inputElement);
        }
      });
      inputElement.addEventListener('input', () => {
        this._hideInputError(inputElement);
      });
    });
  }
  enableValidation = () => {
    this._form.addEventListener('submit', e => {
      e.preventDefault();
    });
    this._setEventListeners();
  };
}

/***/ }),

/***/ "./src/components/Pickup.js":
/*!**********************************!*\
  !*** ./src/components/Pickup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pickup)
/* harmony export */ });
class Pickup {
  constructor(data, templateSelector, elementSetting, disabledAllInputs) {
    this.data = data;
    this._elementSetting = elementSetting;
    this.templateSelector = templateSelector;
    this._pickuptSelector = this._elementSetting.pickupSelector;
    this.isChecked = false;
    this._disabledAllInputs = disabledAllInputs;
  }
  _setEventListener = elementForDelete => {
    this._elementInputDecor.addEventListener('click', () => {
      if (!this.isChecked) {
        this._disabledAllInputs();
        this.enableInput();
      }
    });
    this._elementBtnDelete.addEventListener('click', () => {
      elementForDelete.remove();
    });
  };
  _getTemplate = () => {
    const element = document.querySelector(this.templateSelector).content.querySelector(this._pickuptSelector).cloneNode(true);
    return element;
  };
  enableInput = () => {
    this.isChecked = true;
    this._elementInput.checked = true;
  };
  disableInput = () => {
    this.isChecked = false;
    this._elementInput.checked = false;
  };
  generatePickupElement = () => {
    this._pickupElement = this._getTemplate();
    this._pickupElement.querySelector(this._elementSetting.pickupAddressSelector).textContent = this.data.address;
    this._elementInput = this._pickupElement.querySelector(this._elementSetting.pickupInputSelecor);
    this._elementInputDecor = this._pickupElement.querySelector(this._elementSetting.pickupInputDecorSelecor);
    this._elementBtnDelete = this._pickupElement.querySelector(this._elementSetting.pickupBtnDeleteSelecor);
    this._setEventListener(this._pickupElement);
    return this._pickupElement;
  };
  generatePickupPointElement = () => {
    this._pickupPointElement = this._getTemplate();
    this._pickupPointElement.querySelector(this._elementSetting.pickupAddressSelector).textContent = this.data.address;
    this._pickupPointElement.querySelector(this._elementSetting.pickupPointRateSelector).textContent = this.data.rate;
    this._elementInput = this._pickupPointElement.querySelector(this._elementSetting.pickupInputSelecor);
    this._elementInputDecor = this._pickupPointElement.querySelector(this._elementSetting.pickupInputDecorSelecor);
    this._elementBtnDelete = this._pickupPointElement.querySelector(this._elementSetting.pickupBtnDeleteSelecor);
    this._setEventListener(this._pickupPointElement);
    return this._pickupPointElement;
  };
}

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  _handleEscClose = ({
    key
  }) => {
    if (key === 'Escape') {
      this.close();
    }
  };
  setEventListener() {
    this._popup.addEventListener('mousedown', ({
      target
    }) => {
      if (target.classList.contains('popup_shown') || target.classList.contains('popup__close')) {
        this.close();
      }
    });
  }
  close() {
    this._popup.classList.remove('popup_shown');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  open() {
    this._popup.classList.add('popup_shown');
    document.addEventListener('keydown', this._handleEscClose);
  }
}

/***/ }),

/***/ "./src/components/PopupWithChooseAddress.js":
/*!**************************************************!*\
  !*** ./src/components/PopupWithChooseAddress.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithChooseAddress)
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/components/Popup.js");

class PopupWithChooseAddress extends _Popup__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(popupSelector, pickupAddressList, pickupPointAddressList, handleChangeElement) {
    super(popupSelector);
    this._pickupAddressList = pickupAddressList;
    this._pickupPointAddressList = pickupPointAddressList;
    this._popupBtn = document.querySelector('.popup__btn[data-type="btn-popup-choose-address"]');
    this._popupPickupTab = document.querySelector('.popup__tabs-item[data-type="popup-tab-pickup"]');
    this._popupPickupBlockWithTab = document.querySelector('.popup__tabs-block[data-type="popup-tab-pickup-block"]');
    this._popupPickupPointTab = document.querySelector('.popup__tabs-item[data-type="popup-tab-pickup-point"]');
    this._popupPickupPointBlockWithTab = document.querySelector('.popup__tabs-block[data-type="popup-tab-pickup-point-block"]');
    this._handleChangeElement = handleChangeElement;
    this._tabsItems = [this._popupPickupTab, this._popupPickupPointTab];
    this._tabsItemsBlocks = [this._popupPickupBlockWithTab, this._popupPickupPointBlockWithTab];
  }
  _setActiveTab = () => {
    this._tabsItems.forEach(tab => tab.classList.remove('popup__tabs-item_active'));
    this._tabsItemsBlocks.forEach(block => block.style.display = 'none');
    if (this._activeTab) {
      this._activeTab.classList.add('popup__tabs-item_active');
      this._tabsItemsBlocks[this._tabsItems.indexOf(this._activeTab)].style.display = 'block';
    } else {
      this._tabsItems[this._tabsItems.length - 1].classList.add('popup__tabs-item_active');
      this._tabsItemsBlocks[this._tabsItemsBlocks.length - 1].style.display = 'block';
    }
  };
  setInitialAddress = () => {
    this._tabsItems[this._tabsItems.length - 1].classList.add('popup__tabs-item_active');
    this._pickupPointAddressList[this._pickupPointAddressList.length - 1].enableInput();
    this._handleChangeElement(this._pickupPointAddressList[this._pickupPointAddressList.length - 1]);
  };
  setEventListener = () => {
    super.setEventListener();
    this._popupPickupTab.addEventListener('click', () => {
      this._popupPickupPointBlockWithTab.style.display = 'none';
      this._popupPickupPointTab.classList.remove('popup__tabs-item_active');
      this._popupPickupBlockWithTab.style.display = 'block';
      this._popupPickupTab.classList.add('popup__tabs-item_active');
    });
    this._popupPickupPointTab.addEventListener('click', () => {
      this._popupPickupBlockWithTab.style.display = 'none';
      this._popupPickupTab.classList.remove('popup__tabs-item_active');
      this._popupPickupPointBlockWithTab.style.display = 'block';
      this._popupPickupPointTab.classList.add('popup__tabs-item_active');
    });
    this._popupBtn.addEventListener('click', () => {
      this._activeAddress = this._changeElement();
      this._activeTab = this._tabsItems.find(tab => tab.classList.contains('popup__tabs-item_active'));
      this._handleChangeElement(this._activeAddress);
      this.close();
    });
  };
  close() {
    super.close();
    this.disabledAllInputs();
    if (this._activeAddress) this._activeAddress.enableInput();
  }
  open() {
    super.open();
    this._setActiveTab();
    if (!this._activeAddress) this.setInitialAddress();
  }
  disabledAllInputs = () => {
    this._pickupAddressList.forEach(element => element.disableInput());
    this._pickupPointAddressList.forEach(element => element.disableInput());
  };
  _changeElement = () => {
    const activeElement = this._pickupAddressList.find(element => element.isChecked) || this._pickupPointAddressList.find(element => element.isChecked);
    return activeElement;
  };
}

/***/ }),

/***/ "./src/components/PopupWithChoosePay.js":
/*!**********************************************!*\
  !*** ./src/components/PopupWithChoosePay.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithChoosePay)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");

class PopupWithChoosePay extends _Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(popupSelector, cardList, handleChangeCard) {
    super(popupSelector);
    this._cardList = cardList;
    this._cardBtn = document.querySelector('.popup__btn[data-type="btn-popup-choose-pay"]');
    this._handleChangeCard = handleChangeCard;
  }
  setInitialCard = () => {
    this._activeCard = this._cardList[this._cardList.length - 1];
    this._activeCard.enableInput();
    this._handleChangeCard(this._cardList[this._cardList.length - 1]);
  };
  setEventListener = () => {
    super.setEventListener();
    this._cardBtn.addEventListener('click', () => {
      this._activeCard = this._changeCard();
      this.disabledAllInputs();
      this._handleChangeCard(this._activeCard);
      this.close();
    });
  };
  disabledAllInputs = () => {
    this._cardList.forEach(card => card.disableInput());
  };
  _changeCard = () => {
    const activeCard = this._cardList.find(card => card.isChecked);
    return activeCard;
  };
  open() {
    super.open();
    this._cardList.forEach(card => card.disableInput());
    this._activeCard.enableInput();
  }
}

/***/ }),

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
class Product {
  constructor(data, productSetting, handleAddProductToArray, handleRemoveProductFromArray, handleChangeCountProductInArray, handleDecreaseAccordionCounter, handleIncreaseAccordionCounter, handleDecreaseAccordionPrice, handleIncreaseAccordionPrice, handleDecreaseTotalPrice, handleIncreaseTotalPrice, handleDecreaseTotalCount, handleIncreaseTotalCount, handleDecreaseTotalOldPrice, handleIncreaseTotalOldPrice, handleDecreaseTotalDiscount, handleIncreaseTotalDiscount, handleDecreaseCount, handleIncreaseCount, handleCheckInputProducts, handleDisableInputAllProduct, handleEnableInputAllProduct, handleSetProductMissing) {
    this._data = data;
    this._oldPrice = data.oldPrice;
    this._productSetting = productSetting;
    this._handleAddProduct = handleAddProductToArray;
    this._handleRemoveProduct = handleRemoveProductFromArray;
    this._handleChangeCountProductInArray = handleChangeCountProductInArray;
    this._handleDecreaseAccordionCounter = handleDecreaseAccordionCounter;
    this._handleIncreaseAccordionCounter = handleIncreaseAccordionCounter;
    this._handleDecreaseAccordionPrice = handleDecreaseAccordionPrice;
    this._handleIncreaseAccordionPrice = handleIncreaseAccordionPrice;
    this._handleDecreaseTotalPrice = handleDecreaseTotalPrice;
    this._handleIncreaseTotalPrice = handleIncreaseTotalPrice;
    this._handleDecreaseTotalCount = handleDecreaseTotalCount;
    this._handleIncreaseTotalCount = handleIncreaseTotalCount;
    this._handleDecreaseTotalOldPrice = handleDecreaseTotalOldPrice;
    this._handleIncreaseTotalOldPrice = handleIncreaseTotalOldPrice;
    this._handleDecreaseTotalDiscount = handleDecreaseTotalDiscount;
    this._handleIncreaseTotalDiscount = handleIncreaseTotalDiscount;
    this._handleDecreaseCount = handleDecreaseCount;
    this._handleIncreaseCount = handleIncreaseCount;
    this._handleCheckInputProducts = handleCheckInputProducts;
    this._handleDisableInputAllProduct = handleDisableInputAllProduct;
    this._handleEnableInputAllProduct = handleEnableInputAllProduct;
    this._hadleSetProductMissing = handleSetProductMissing, this.deliveryDate = this._data.deliveryDate;
    this.id = data.id;
    this.image = data.image;
    this.isChecked = false;
  }
  _renderOldSum = ({
    sum,
    discount,
    discountUser
  }) => {
    this._product.querySelector(this._productSetting.productOldPriceSelector).textContent = `${sum.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} сом`;
    if (discount) {
      this._product.querySelector(this._productSetting.productDiscountSelector).textContent = `Скидка ${this._data.priceInfo.discount}%`;
      this._product.querySelector(this._productSetting.productDiscountSumSelector).textContent = `-${discount} сом`;
    }
    if (discountUser) {
      this._product.querySelector(this._productSetting.productPersonDiscountSelector).textContent = `Скидка покупателя ${this._data.priceInfo.discountUser}%`;
      this._product.querySelector(this._productSetting.productPersonDiscountSumSelector).textContent = `-${discountUser} сом`;
    }
  };
  _calculateOldSum = quantity => {
    const sum = this._oldPrice * quantity;
    let discount = null;
    let discountUser = null;
    if (this._data.priceInfo.discount) {
      discount = (this._oldPrice * quantity * this._data.priceInfo.discount / 100).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    }
    if (this._data.priceInfo.discountUser) {
      discountUser = (this._oldPrice * quantity * this._data.priceInfo.discountUser / 100).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    }
    return {
      sum,
      discount,
      discountUser
    };
  };
  _renderSum = value => {
    value.toString().length > 5 ? this._newPriceElement.classList.add(this._productSetting.productNewPriceSmallTextClass) : this._newPriceElement.classList.remove(this._productSetting.productNewPriceSmallTextClass);
    this._newPriceElement.textContent = `${value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}`;
  };
  _calculateSum = quantity => {
    this._sumDiscount = this._oldPrice * (this._data.priceInfo.discount + this._data.priceInfo.discountUser) / 100;
    return (this._oldPrice - this._sumDiscount) * quantity;
  };
  _renderCounter = value => {
    this._productCount.value = value;
  };
  _increaseCounter = () => {
    this._productCountPlusBtn.classList.remove(this._productSetting.productCountBtnTypeDisabledClass);
    if (this._productCount.value >= this._data.available - 1) {
      this._productCountPlusBtn.classList.add(this._productSetting.productCountBtnTypeDisabledClass);
    }
    this._productCountMinusBtn.classList.remove(this._productSetting.productCountBtnTypeDisabledClass);
    if (this._productCount.value >= this._data.available) return;
    this._handleChangeCountProductInArray(this.id, parseInt(this._productCount.value) + 1);
    if (this.isChecked) {
      this._handleIncreaseAccordionPrice(this._oldPrice - this._sumDiscount);
      this._renderSum(this._calculateSum(parseInt(this._productCount.value) + 1));
      this._renderOldSum(this._calculateOldSum(parseInt(this._productCount.value) + 1));
      this._renderCounter(parseInt(this._productCount.value) + 1);
      this._handleIncreaseTotalPrice(this._oldPrice - this._sumDiscount);
      this._handleIncreaseTotalCount(1);
      this._handleIncreaseTotalOldPrice(this._oldPrice);
      this._handleIncreaseTotalDiscount(this._sumDiscount * this._productCount.value);
    }
  };
  _decreaseCounter = () => {
    this._productCountPlusBtn.classList.remove(this._productSetting.productCountBtnTypeDisabledClass);
    if (this._productCount.value <= 2) {
      this._productCountMinusBtn.classList.add(this._productSetting.productCountBtnTypeDisabledClass);
    }
    if (this._productCount.value <= 1) return;
    this._handleChangeCountProductInArray(this.id, parseInt(this._productCount.value) - 1);
    if (this.isChecked) {
      this._handleIncreaseAccordionPrice(-(this._oldPrice - this._sumDiscount));
      this._renderSum(this._calculateSum(parseInt(this._productCount.value) - 1));
      this._renderOldSum(this._calculateOldSum(parseInt(this._productCount.value) - 1));
      this._renderCounter(parseInt(this._productCount.value) - 1);
      this._handleDecreaseTotalPrice(this._oldPrice - this._sumDiscount);
      this._handleDecreaseTotalCount(1);
      this._handleDecreaseTotalOldPrice(this._oldPrice);
      this._handleDecreaseTotalDiscount(this._sumDiscount * this._productCount.value);
    }
  };
  enableInput = () => {
    this._handleAddProduct(this._data);
    this.isChecked = true;
    this._productInput.checked = true;
    this._handleIncreaseTotalPrice((this._oldPrice - this._sumDiscount) * this._productCount.value);
    this._handleIncreaseTotalCount(parseInt(this._productCount.value));
    this._handleIncreaseTotalOldPrice(this._oldPrice * this._productCount.value);
    this._handleIncreaseTotalDiscount(this._sumDiscount * this._productCount.value);
  };
  disableInput = () => {
    this._handleRemoveProduct(this.id);
    this.isChecked = false;
    this._productInput.checked = false;
    this._handleDecreaseTotalPrice((this._oldPrice - this._sumDiscount) * this._productCount.value);
    this._handleDecreaseTotalCount(parseInt(this._productCount.value));
    this._handleDecreaseTotalOldPrice(this._oldPrice * this._productCount.value);
    this._handleDecreaseTotalDiscount(this._sumDiscount * this._productCount.value);
  };
  _removeProduct = () => {
    this._handleRemoveProduct(this.id);

    // if product not selected, do not decrease total price
    if (this.isChecked) {
      this._handleDecreaseTotalPrice((this._oldPrice - this._sumDiscount) * this._productCount.value);
      this._handleDecreaseTotalCount(this._productCount.value);
      this._handleDecreaseTotalOldPrice(this._oldPrice * this._productCount.value);
      this._handleDecreaseTotalDiscount(this._sumDiscount * this._productCount.value);
    }
    ;
    this._handleIncreaseCount(-1);
    this._handleDecreaseAccordionCounter();

    // check all inputs if delete disabled product
    this._handleCheckInputProducts() ? this._handleEnableInputAllProduct() : this._handleDisableInputAllProduct();
    this._product.remove();
  };
  _setEventListenerForProductMissing = () => {
    this._productMissingDeleteBtn.addEventListener('click', () => {
      this._productMissing.remove();
    });
    this._productMissingFavoriteBtn.addEventListener('click', () => {
      this._productFavoriteBtn.classList.toggle(this._productSetting.productIconActiveClass);
      this._productMissingFavoriteBtn.classList.toggle(this._productSetting.productIconActiveClass);
    });
  };
  _setEventListeners = () => {
    this._productInputDecor.addEventListener('click', () => {
      if (!this.isChecked) {
        this.enableInput();
      } else {
        this.disableInput();
      }
    });
    this._productCountPlusBtn.addEventListener('click', () => {
      this._increaseCounter();
    });
    this._productCountMinusBtn.addEventListener('click', () => {
      this._decreaseCounter();
    });
    this._productFavoriteBtn.addEventListener('click', () => {
      this._productFavoriteBtn.classList.toggle(this._productSetting.productIconActiveClass);
      this._productMissingFavoriteBtn.classList.toggle(this._productSetting.productIconActiveClass);
    });
    this._productDeleteBtn.addEventListener('click', () => {
      this._removeProduct();
    });
  };
  _getTemplate = (templateSelector, itemSelector) => {
    const productElement = document.querySelector(templateSelector).content.querySelector(itemSelector).cloneNode(true);
    return productElement;
  };
  _generateProductMissing = () => {
    this._productMissing = this._getTemplate(this._productSetting.productMissingTemplateSelector, this._productSetting.productMissingSelector);
    this._productMissing.querySelector(this._productSetting.productPreviewSelector).src = this._data.image;
    this._productMissing.querySelector(this._productSetting.productTitleSelector).textContent = this._data.name.trim();
    this._productMissing.querySelector(this._productSetting.productPreviewSelector).alt = this._data.name.trim();
    if (this._data.color || this._data.size) {
      if (this._data.color) {
        this._productMissing.querySelector(this._productSetting.productColorSelector).textContent = `Цвет: ${this._data.color.trim()}`;
      }
      if (this._data.size) {
        this._productMissing.querySelector(this._productSetting.productSizeSelector).textContent = `${this._data.size}`;
      } else {
        this._productMissing.querySelector(this._productSetting.productPropertyWrapperSelector).style.display = 'none';
      }
    } else {
      this._productMissing.querySelector(this._productSetting.productItemPropertiesSelector).style.display = 'none';
    }
    this._productMissingFavoriteBtn = this._productMissing.querySelector(this._productSetting.productFavotiteBtnSelector);
    this._productMissingDeleteBtn = this._productMissing.querySelector(this._productSetting.productDeleteBtnSelector);
    this._setEventListenerForProductMissing();
    return this._productMissing;
  };
  generateProduct = () => {
    this._product = this._getTemplate(this._productSetting.productTemplateSelector, this._productSetting.productSelector);
    this._productInput = this._product.querySelector(this._productSetting.productInputSelecor);
    this._productInputDecor = this._product.querySelector(this._productSetting.productInputDecorSelecor);
    this._product.querySelector(this._productSetting.productPreviewSelector).src = this._data.image;
    this._product.querySelector(this._productSetting.productPreviewSelector).alt = this._data.name.trim();
    this._product.querySelector(this._productSetting.productTitleSelector).textContent = this._data.name.trim();
    if (this._data.color || this._data.size) {
      if (this._data.color) {
        this._product.querySelector(this._productSetting.productColorSelector).textContent = `Цвет: ${this._data.color.trim()}`;
      }
      if (this._data.size) {
        this._product.querySelector(this._productSetting.productSizeSelector).textContent = `${this._data.size}`;
      } else {
        this._product.querySelector(this._productSetting.productPropertyWrapperSelector).style.display = 'none';
      }
    } else {
      this._product.querySelector(this._productSetting.productItemPropertiesSelector).style.display = 'none';
    }
    this._product.querySelector(this._productSetting.productSellerSelector).textContent = this._data.seller;
    this._product.querySelector(this._productSetting.productOrganizationNameSelector).textContent = this._data.organization;
    this._product.querySelector(this._productSetting.productOrgNameSelector).textContent = this._data.organizationInfo.orgName;
    this._product.querySelector(this._productSetting.productOrganizationRequisitesSelector).textContent = this._data.organizationInfo.requisites;
    this._product.querySelector(this._productSetting.productOrganizationOrgAddressSelector).textContent = this._data.organizationInfo.orgAddress;
    this._productCount = this._product.querySelector(this._productSetting.productCountSelector);
    this._productCount.value = this._data.quantity;
    this._newPriceElement = this._product.querySelector(this._productSetting.productNewPriceSelector);
    this._productFavoriteBtn = this._product.querySelector(this._productSetting.productFavotiteBtnSelector);
    this._productDeleteBtn = this._product.querySelector(this._productSetting.productDeleteBtnSelector);
    this._productCountMinusBtn = this._product.querySelector(this._productSetting.productCountMinusBtnSelector);
    this._productCountPlusBtn = this._product.querySelector(this._productSetting.productCountPlusBtnSelector);
    this._renderSum(this._calculateSum(this._data.quantity));
    this._renderOldSum(this._calculateOldSum(this._data.quantity));
    if (this._data.available <= 2) {
      this._product.querySelector(this._productSetting.productAvailableSelector).textContent = `Осталось ${this._data.available} шт.`;
    }
    if (Infinity) {
      // condition if there is no product
      this._hadleSetProductMissing(this._generateProductMissing());
    }
    this._setEventListeners();
    this._handleIncreaseAccordionCounter();
    this._handleIncreaseCount(1);
    this._handleIncreaseAccordionPrice((this._oldPrice - this._sumDiscount) * this._data.quantity);
    return this._product;
  };
}

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
class Section {
  constructor({
    data,
    renderer
  }, containerSelector) {
    this._data = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  removeItems = () => {
    this._container.innerHTML = '';
  };
  setItem = element => {
    this._container.prepend(element);
  };
  renderItems = () => {
    this._data.reverse().forEach(item => this._renderer(item));
  };
}

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   basketForm: () => (/* binding */ basketForm),
/* harmony export */   basketSetting: () => (/* binding */ basketSetting),
/* harmony export */   btnChooseAddress: () => (/* binding */ btnChooseAddress),
/* harmony export */   btnChoosePay: () => (/* binding */ btnChoosePay),
/* harmony export */   btnSidebarChooseAddress: () => (/* binding */ btnSidebarChooseAddress),
/* harmony export */   btnSidebarChoosePay: () => (/* binding */ btnSidebarChoosePay),
/* harmony export */   cardSetting: () => (/* binding */ cardSetting),
/* harmony export */   deliveryItemsContainerSelector: () => (/* binding */ deliveryItemsContainerSelector),
/* harmony export */   deliveryMonthTitles: () => (/* binding */ deliveryMonthTitles),
/* harmony export */   formSetting: () => (/* binding */ formSetting),
/* harmony export */   pickupSetting: () => (/* binding */ pickupSetting),
/* harmony export */   popupChooseAddressContainerSelector: () => (/* binding */ popupChooseAddressContainerSelector),
/* harmony export */   popupChoosePayContainerSelector: () => (/* binding */ popupChoosePayContainerSelector),
/* harmony export */   popupChoosePickupContainerSelector: () => (/* binding */ popupChoosePickupContainerSelector),
/* harmony export */   popupChoosePickupPointContainerSelector: () => (/* binding */ popupChoosePickupPointContainerSelector),
/* harmony export */   popupSelectors: () => (/* binding */ popupSelectors),
/* harmony export */   productContainerSelector: () => (/* binding */ productContainerSelector),
/* harmony export */   productSetting: () => (/* binding */ productSetting),
/* harmony export */   productsTitles: () => (/* binding */ productsTitles),
/* harmony export */   userDataExample: () => (/* binding */ userDataExample),
/* harmony export */   userOrderExample: () => (/* binding */ userOrderExample)
/* harmony export */ });
/* harmony import */ var _img_item_01_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/item-01.jpg */ "./src/img/item-01.jpg");
/* harmony import */ var _img_item_02_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/item-02.jpg */ "./src/img/item-02.jpg");
/* harmony import */ var _img_item_03_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/item-03.jpg */ "./src/img/item-03.jpg");
/* harmony import */ var _img_icons_icon_card_mir_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/icons/icon-card-mir.svg */ "./src/img/icons/icon-card-mir.svg");
/* harmony import */ var _img_icons_icon_card_visa_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/icons/icon-card-visa.svg */ "./src/img/icons/icon-card-visa.svg");
/* harmony import */ var _img_icons_icon_card_mastercard_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/icons/icon-card-mastercard.svg */ "./src/img/icons/icon-card-mastercard.svg");
/* harmony import */ var _img_icons_icon_card_maetro_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/icons/icon-card-maetro.svg */ "./src/img/icons/icon-card-maetro.svg");







const userDataExample = {
  delevery: {
    pickup: [{
      address: 'Бишкек, улица Табышалиева, 57'
    }, {
      address: 'Бишкек, улица Жукеева-Пудовкина, 77/1'
    }, {
      address: 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1'
    }],
    pickupPoint: [{
      address: 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
      rate: null,
      officeHours: 'Ежедневно с 10 до 21 '
    }, {
      address: 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 22',
      rate: 4.99,
      officeHours: 'Ежедневно с 10 до 22 '
    }, {
      address: 'г. Бишкек, улица Табышалиева, д. 57',
      rate: 4.87,
      officeHours: 'Ежедневно с 9 до 21 '
    }]
  },
  cards: [{
    cardNumber: '1234 56•• •••• 1234',
    cardDate: '07/30',
    cardUrlIcon: _img_icons_icon_card_mir_svg__WEBPACK_IMPORTED_MODULE_3__
  }, {
    cardNumber: '1234 56•• •••• 1235',
    cardDate: '02/28',
    cardUrlIcon: _img_icons_icon_card_visa_svg__WEBPACK_IMPORTED_MODULE_4__
  }, {
    cardNumber: '1234 56•• •••• 1236',
    cardDate: '05/29',
    cardUrlIcon: _img_icons_icon_card_mastercard_svg__WEBPACK_IMPORTED_MODULE_5__
  }, {
    cardNumber: '1234 56•• •••• 1237',
    cardDate: '12/24',
    cardUrlIcon: _img_icons_icon_card_maetro_svg__WEBPACK_IMPORTED_MODULE_6__
  }]
};
const userOrderExample = [{
  id: 12001,
  name: 'Футболка UZcotton мужская',
  image: _img_item_01_jpg__WEBPACK_IMPORTED_MODULE_0__,
  color: 'белый',
  size: 56,
  seller: 'Коледино WB',
  organization: 'OOO Вайлдберриз',
  organizationInfo: {
    orgName: 'OOO «Вайлдберриз»',
    requisites: 'ОГРН: 5167746233210',
    orgAddress: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 5'
  },
  quantity: 1,
  available: 2,
  deliveryDate: [{
    1: ['2023-02-05', '2023-02-06']
  }],
  priceInfo: {
    discount: 30,
    discountUser: 10
  },
  oldPrice: 3300
}, {
  id: 12002,
  name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
  image: _img_item_02_jpg__WEBPACK_IMPORTED_MODULE_1__,
  color: 'прозрачный',
  size: null,
  seller: 'Коледино WB',
  organization: 'OOO Мегапрофстиль',
  organizationInfo: {
    orgName: 'OOO «МЕГАПРОФСТИЛЬ»',
    requisites: 'ОГРН: 5167746237148',
    orgAddress: '120477, Москва, улица Зеленая Сосна, 2, корпус 1, стр. 1, помещение 2, офис 47'
  },
  quantity: 200,
  available: 1000,
  deliveryDate: [{
    184: ['2023-02-05', '2023-02-06']
  }, {
    816: ['2023-02-07', '2023-02-08']
  }],
  priceInfo: {
    discount: 12,
    discountUser: 10
  },
  oldPrice: 13200
}, {
  id: 12003,
  name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
  image: _img_item_03_jpg__WEBPACK_IMPORTED_MODULE_2__,
  color: null,
  size: null,
  seller: 'Коледино WB',
  organization: 'OOO Вайлдберриз',
  organizationInfo: {
    orgName: 'OOO «Вайлдберриз»',
    requisites: 'ОГРН: 5167746235487',
    orgAddress: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 19'
  },
  quantity: 2,
  available: 2,
  deliveryDate: [{
    2: ['2023-02-05', '2023-02-06']
  }],
  priceInfo: {
    discount: null,
    discountUser: 10
  },
  oldPrice: 690
}];
const popupSelectors = {
  choosePay: '.popup[data-type="popup-choose-pay"]',
  chooseAddress: '.popup[data-type="popup-choose-address"]'
};
const basketSetting = {
  basketAccordionProductCountSelector: '.accordion__hide-info-item[data-type="accordion-count"]',
  basketAccordionProductPriceSelector: '.accordion__hide-info-item[data-type="accordion-price"]',
  cardIconSelector: '.pay__icon',
  cardNumberSelector: '.pay__number',
  cardDateSelector: '.pay__date',
  pickupTemplateSelector: '#pickup-point',
  pickupTypeSelector: '.delivery__label[data-type="delivery-type"]',
  pickupSidebarTypeSelector: '.basket-order__title[data-type="delivery-type"]',
  pickupDataSelector: '.delivery__data',
  pickupAddressSelector: '.delivery__address',
  pickupSidebarAddressSelector: '.basket-order__address',
  pickupRateSelector: '.delivery__rate',
  pickupOfficeHoursSelector: '.delivery__office-hours',
  pickupDataHideClass: 'delivery__data_hide',
  pickupTypeText: 'Пункт выдачи',
  pickupPointTypeText: 'Курьером',
  pickupSidebarTypeText: 'Доставка в пункт выдачи',
  pickupPointSidebarTypeText: 'Доставка курьером',
  productListMissingContainerSelector: '#product-list-missing',
  accordionCheckboxAllProductSelector: '.product__checkbox[data-type="checkbox-all-product"]',
  accordionCheckboxAllProductDecorSelector: '.product__checkbox-decor[data-type="checkbox-all-product-decor"]',
  basketTotalPriceSelector: '#basket-total-price',
  basketTotalCountSelector: '#basket-total-count',
  basketTotalOldPriceSelector: '#basket-total-old-price',
  basketTotalDiscountSelector: '#basket-total-discount',
  basketTotalDeliveryDateSelector: '.basket-order__date[data-type="delivery_total-date"]',
  basketDeliveryDateItemListSelector: '.delivery__items',
  basketCheckboxPaymentTypeSelector: '.basket-order__checkbox[data-type="checkbox-sidebar-payment-type"]',
  basketCheckboxPaymentTypeDecorSelector: '.basket-order__checkbox-decor[data-type="checkbox-sidebar-payment-type"]',
  basketTotalBtnSubmitSelector: '.basket-order__btn[data-type="btn-sidebar-total"]',
  headerIconCounterSelector: '.header__link-count[data-type="counter-header"]',
  navbarMobileIconCounterSelector: '.navbar-mobile__icon-count[data-type="counter-mobile"]',
  basketOrderBtnSmallTextClass: 'basket-order__btn_type_small'
};
const productSetting = {
  productTemplateSelector: '#product',
  productMissingTemplateSelector: '#product-miising',
  productSelector: '.product-item',
  productMissingSelector: '.product-item_type_missing',
  productPreviewSelector: '.product-item__img',
  productTitleSelector: '.product-item__title',
  productColorSelector: '.product-item__property[data-type="product-color"]',
  productSizeSelector: '.product-item__property[data-type="product-size"]',
  productSellerSelector: '.product-item__seller',
  productOrganizationNameSelector: '.organization__name',
  productOrgNameSelector: '.organization__org-name',
  productOrganizationRequisitesSelector: '.organization__requisites',
  productOrganizationOrgAddressSelector: '.organization__org-address',
  productCountSelector: '.product-item__count-num',
  productAvailableSelector: '.product-item__available',
  productNewPriceSelector: '.product-item__new-price',
  productOldPriceSelector: '.product-item__old-price',
  productDiscountSelector: '.discount__label[data-type="product-discount"]',
  productDiscountSumSelector: '.discount__item[data-type="product-discount"]',
  productPersonDiscountSelector: '.discount__label[data-type="product-person-discount"]',
  productPersonDiscountSumSelector: '.discount__item[data-type="product-person-discount"]',
  productFavotiteBtnSelector: '.product-item__icon_type_favorite',
  productDeleteBtnSelector: '.product-item__icon_type_delete',
  productIconActiveClass: 'product-item__icon_type_active',
  productCountMinusBtnSelector: '.product-item__count-btn_type_minus',
  productCountPlusBtnSelector: '.product-item__count-btn_type_plus',
  productInputSelecor: '.product__checkbox',
  productInputDecorSelecor: '.product__checkbox-decor_type_item',
  productNewPriceSmallTextClass: 'product-item__new-price_type_small',
  productCountBtnTypeDisabledClass: 'product-item__count-btn_type_disabled',
  productPropertyWrapperSelector: '.product-item__property-wrapper',
  productItemPropertiesSelector: '.product-item__properties'
};
const cardSetting = {
  cardTemplateSelector: '#card',
  cardSelector: '.card',
  cardIconSelector: '.card__icon',
  cardNumberSelector: '.card__number',
  cardInputSelecor: '.card__radio',
  cardInputDecorSelecor: '.card__radio-decor'
};
const pickupSetting = {
  pickupTemplateSelector: '#pickup',
  pickupPointTemplateSelector: '#pickup-point',
  pickupSelector: '.pickup',
  pickupAddressSelector: '.pickup__address',
  pickupPointRateSelector: '.pickup__rate',
  pickupInputSelecor: '.pickup__radio',
  pickupInputDecorSelecor: '.pickup__radio-decor',
  pickupBtnDeleteSelecor: '.pickup__delete'
};
const productContainerSelector = '#product-list',
  popupChoosePayContainerSelector = '#popup-choose-pay',
  popupChooseAddressContainerSelector = '#popup-choose-address',
  popupChoosePickupContainerSelector = '#popup-choose-pickup',
  popupChoosePickupPointContainerSelector = '#popup-choose-pickup-point',
  btnChoosePay = document.querySelector('.basket__content-header-btn[data-type="btn-choose-pay"]'),
  btnChooseAddress = document.querySelector('.basket__content-header-btn[data-type="btn-choose-address"]'),
  btnSidebarChoosePay = document.querySelector('.basket-order__btn-edit[data-type="btn-sidebar-choose-pay"]'),
  btnSidebarChooseAddress = document.querySelector('.basket-order__btn-edit[data-type="btn-sidebar-choose-address"]'),
  productsTitles = ['товар', 'товара', 'товаров'],
  deliveryMonthTitles = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
  basketForm = document.forms['basket-form'],
  deliveryItemsContainerSelector = '.delivery__items';
const formSetting = {
  formSelector: '.popup__form',
  inputSelector: '.recipient__input',
  submitButtonSelector: '.basket-order__btn',
  inputErrorClass: 'recipient__input_type_error',
  errorClass: 'recipient__input_type_show'
};

/***/ }),

/***/ "./src/utils/getEndLine.js":
/*!*********************************!*\
  !*** ./src/utils/getEndLine.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getEndLine(num, titles) {
  return titles[num % 10 === 1 && num % 100 !== 11 ? 0 : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? 1 : 2];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getEndLine);

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/img/icons/icon-card-maetro.svg":
/*!********************************************!*\
  !*** ./src/img/icons/icon-card-maetro.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa4d029fcfa26a4756ad.svg";

/***/ }),

/***/ "./src/img/icons/icon-card-mastercard.svg":
/*!************************************************!*\
  !*** ./src/img/icons/icon-card-mastercard.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a415faa28f8a4504a893.svg";

/***/ }),

/***/ "./src/img/icons/icon-card-mir.svg":
/*!*****************************************!*\
  !*** ./src/img/icons/icon-card-mir.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "556231c386df61c1bd29.svg";

/***/ }),

/***/ "./src/img/icons/icon-card-visa.svg":
/*!******************************************!*\
  !*** ./src/img/icons/icon-card-visa.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eae334b468549c536097.svg";

/***/ }),

/***/ "./src/img/item-01.jpg":
/*!*****************************!*\
  !*** ./src/img/item-01.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8dcf8e43ef6969b162ad.jpg";

/***/ }),

/***/ "./src/img/item-02.jpg":
/*!*****************************!*\
  !*** ./src/img/item-02.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8063d1cb696e1903c03f.jpg";

/***/ }),

/***/ "./src/img/item-03.jpg":
/*!*****************************!*\
  !*** ./src/img/item-03.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e0c4750dcfa9f15506d.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithChoosePay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PopupWithChoosePay.js */ "./src/components/PopupWithChoosePay.js");
/* harmony import */ var _components_PopupWithChooseAddress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithChooseAddress.js */ "./src/components/PopupWithChooseAddress.js");
/* harmony import */ var _components_Product_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Product.js */ "./src/components/Product.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_Pickup_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Pickup.js */ "./src/components/Pickup.js");
/* harmony import */ var _components_Basket_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Basket.js */ "./src/components/Basket.js");
/* harmony import */ var _components_Delivery_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Delivery.js */ "./src/components/Delivery.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");












const productItemList = [];
const cardList = [];
const pickupAddressList = [];
const pickupPointAddressList = [];

// validation

const basketFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_10__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.formSetting, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.basketForm);

// create slices

const productList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  data: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.userOrderExample,
  renderer: item => {
    const product = new _components_Product_js__WEBPACK_IMPORTED_MODULE_5__["default"](item, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.productSetting, basket.addProductInListArray, basket.removeProductInListArray, basket.changeCountProductListArray, basket.decreaseCounterBasket, basket.increaseCounterBasket, basket.decreasePriceBasket, basket.increasePriceBasket, basket.decreaseTotalPrice, basket.increaseTotalPrice, basket.decreaseTotalCount, basket.increaseTotalCount, basket.decreaseTotalOldPrice, basket.increaseTotalOldPrice, basket.decreaseTotalDiscount, basket.increaseTotalDiscount, basket.decreaseCount, basket.increaseCount, basket.checkInputProducts, basket.disableInputAllProduct, basket.enableInputAllProduct, basket.setProductMissing);
    productItemList.push(product);
    const productElement = product.generateProduct();
    productList.setItem(productElement);
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.productContainerSelector);
const popupCardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  data: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.userDataExample.cards,
  renderer: item => {
    const card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"](item, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.cardSetting, popupWithChoosePay.disabledAllInputs);
    cardList.push(card);
    const cardElement = card.generateCard();
    popupCardList.setItem(cardElement);
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.popupChoosePayContainerSelector);
const popupPickupList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  data: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.userDataExample.delevery.pickup,
  renderer: item => {
    const pickup = new _components_Pickup_js__WEBPACK_IMPORTED_MODULE_7__["default"](item, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.pickupSetting.pickupTemplateSelector, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.pickupSetting, popupWithChooseAddress.disabledAllInputs);
    pickupAddressList.push(pickup);
    const pickupElement = pickup.generatePickupElement();
    popupPickupList.setItem(pickupElement);
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.popupChoosePickupContainerSelector);
const popupPickupPointList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  data: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.userDataExample.delevery.pickupPoint,
  renderer: item => {
    const pickupPoint = new _components_Pickup_js__WEBPACK_IMPORTED_MODULE_7__["default"](item, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.pickupSetting.pickupPointTemplateSelector, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.pickupSetting, popupWithChooseAddress.disabledAllInputs);
    pickupPointAddressList.push(pickupPoint);
    const pickupPointElement = pickupPoint.generatePickupPointElement();
    popupPickupPointList.setItem(pickupPointElement);
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.popupChoosePickupPointContainerSelector);
const basket = new _components_Basket_js__WEBPACK_IMPORTED_MODULE_8__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.basketSetting, productItemList, {
  renderDeliveries: itemList => {
    const deliveryListItem = new _components_Section_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      data: itemList,
      renderer: item => {
        const delivery = new _components_Delivery_js__WEBPACK_IMPORTED_MODULE_9__["default"](item);
        const deliveryElement = delivery.generateDelivery();
        deliveryListItem.setItem(deliveryElement);
      }
    }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.deliveryItemsContainerSelector);
    return deliveryListItem;
  }
});
const popupWithChoosePay = new _components_PopupWithChoosePay_js__WEBPACK_IMPORTED_MODULE_3__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.popupSelectors.choosePay, cardList, basket.changeCard);
const popupWithChooseAddress = new _components_PopupWithChooseAddress_js__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.popupSelectors.chooseAddress, pickupAddressList, pickupPointAddressList, basket.changeAddress);
productList.renderItems();
popupCardList.renderItems();
popupPickupList.renderItems();
popupPickupPointList.renderItems();

// set listeners

_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.btnChoosePay.addEventListener('click', () => {
  popupWithChoosePay.open();
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.btnChooseAddress.addEventListener('click', () => {
  popupWithChooseAddress.open();
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.btnSidebarChoosePay.addEventListener('click', () => {
  popupWithChoosePay.open();
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.btnSidebarChooseAddress.addEventListener('click', () => {
  popupWithChooseAddress.open();
});
basket.addInicialProductInListArray();
basket.setEventListeners();
basket.enableAllProducts();
popupWithChoosePay.setInitialCard();
popupWithChoosePay.setEventListener();
popupWithChooseAddress.setInitialAddress();
popupWithChooseAddress.setEventListener();
basketFormValidator.enableValidation();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsQ0FBQ2pXLFdBQVcsQ0FBQyxDQUFDO0FBQzNCbVcsZUFBZSxDQUFDblcsV0FBVyxDQUFDLENBQUM7QUFDN0JzVyxvQkFBb0IsQ0FBQ3RXLFdBQVcsQ0FBQyxDQUFDOztBQUVsQzs7QUFFQTZWLDZEQUFnQixDQUFDeFMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07RUFDL0M2UyxrQkFBa0IsQ0FBQ3JOLElBQUksQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQztBQUVGZ04saUVBQW9CLENBQUN4UyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtFQUNuRCtTLHNCQUFzQixDQUFDdk4sSUFBSSxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBRUZnTixvRUFBdUIsQ0FBQ3hTLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0VBQ3RENlMsa0JBQWtCLENBQUNyTixJQUFJLENBQUMsQ0FBQztBQUMzQixDQUFDLENBQUM7QUFFRmdOLHdFQUEyQixDQUFDeFMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07RUFDMUQrUyxzQkFBc0IsQ0FBQ3ZOLElBQUksQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUVGbU4sTUFBTSxDQUFDdFQsNEJBQTRCLENBQUMsQ0FBQztBQUNyQ3NULE1BQU0sQ0FBQzVTLGlCQUFpQixDQUFDLENBQUM7QUFDMUI0UyxNQUFNLENBQUNsVCxpQkFBaUIsQ0FBQyxDQUFDO0FBQzFCb1Qsa0JBQWtCLENBQUM5SyxjQUFjLENBQUMsQ0FBQztBQUNuQzhLLGtCQUFrQixDQUFDbE4sZ0JBQWdCLENBQUMsQ0FBQztBQUNyQ29OLHNCQUFzQixDQUFDM0wsaUJBQWlCLENBQUMsQ0FBQztBQUMxQzJMLHNCQUFzQixDQUFDcE4sZ0JBQWdCLENBQUMsQ0FBQztBQUV6QytNLG1CQUFtQixDQUFDNU8sZ0JBQWdCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFya2V0cGxhY2UvLi9zcmMvY29tcG9uZW50cy9CYXNrZXQuanMiLCJ3ZWJwYWNrOi8vbWFya2V0cGxhY2UvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL21hcmtldHBsYWNlLy4vc3JjL2NvbXBvbmVudHMvRGVsaXZlcnkuanMiLCJ3ZWJwYWNrOi8vbWFya2V0cGxhY2UvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL21hcmtldHBsYWNlLy4vc3JjL2NvbXBvbmVudHMvUGlja3VwLmpzIiwid2VicGFjazovL21hcmtldHBsYWNlLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWFya2V0cGxhY2UvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhDaG9vc2VBZGRyZXNzLmpzIiwid2VicGFjazovL21hcmtldHBsYWNlLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoQ2hvb3NlUGF5LmpzIiwid2VicGFjazovL21hcmtldHBsYWNlLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9tYXJrZXRwbGFjZS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbWFya2V0cGxhY2UvLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21hcmtldHBsYWNlLy4vc3JjL3V0aWxzL2dldEVuZExpbmUuanMiLCJ3ZWJwYWNrOi8vbWFya2V0cGxhY2UvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL21hcmtldHBsYWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hcmtldHBsYWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYXJrZXRwbGFjZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hcmtldHBsYWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFya2V0cGxhY2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbWFya2V0cGxhY2UvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvZHVjdHNUaXRsZXMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgZGVsaXZlcnlNb250aFRpdGxlcyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgZ2V0RW5kTGluZSBmcm9tICcuLi91dGlscy9nZXRFbmRMaW5lLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFza2V0IHtcbiAgY29uc3RydWN0b3IoYmFza2V0U2V0dGluZywgcHJvZHVjdExpc3QsIHsgcmVuZGVyRGVsaXZlcmllcyB9KSB7XG4gICAgdGhpcy5fYmFza2V0U2V0dGluZyA9IGJhc2tldFNldHRpbmc7XG4gICAgdGhpcy5faW5pdGlhbFByb2R1Y3RMaXN0ID0gcHJvZHVjdExpc3Q7XG4gICAgdGhpcy5fcHJvZHVjdExpc3QgPSBwcm9kdWN0TGlzdDtcbiAgICB0aGlzLl9wcm9kdWN0TGlzdE1pc3NpbmdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2Jhc2tldFNldHRpbmcucHJvZHVjdExpc3RNaXNzaW5nQ29udGFpbmVyU2VsZWN0b3IpO1xuICAgIHRoaXMuX3JlbmRlckRlbGl2ZXJpZXMgPSByZW5kZXJEZWxpdmVyaWVzO1xuICAgIHRoaXMuX2FjY29yZGlvblByb2R1Y3RDb3VudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2Jhc2tldFNldHRpbmcuYmFza2V0QWNjb3JkaW9uUHJvZHVjdENvdW50U2VsZWN0b3IpO1xuICAgIHRoaXMuX2FjY29yZGlvblByb2R1Y3RDb3VudCA9IG51bGw7XG4gICAgdGhpcy5fYWNjb3JkaW9uUHJvZHVjdFByaWNlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fYmFza2V0U2V0dGluZy5iYXNrZXRBY2NvcmRpb25Qcm9kdWN0UHJpY2VTZWxlY3Rvcik7XG4gICAgdGhpcy5fYWNjb3JkaW9uUHJvZHVjdFByaWNlID0gbnVsbDtcbiAgICB0aGlzLl9hY2NvcmRpb25DaGVja2JveEFsbFByb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2Jhc2tldFNldHRpbmcuYWNjb3JkaW9uQ2hlY2tib3hBbGxQcm9kdWN0U2VsZWN0b3IpO1xuICAgIHRoaXMuX2FjY29yZGlvbkNoZWNrYm94QWxsUHJvZHVjdERlY29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9iYXNrZXRTZXR0aW5nLmFjY29yZGlvbkNoZWNrYm94QWxsUHJvZHVjdERlY29yU2VsZWN0b3IpO1xuICAgIHRoaXMuX2NhcmRJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fYmFza2V0U2V0dGluZy5jYXJkSWNvblNlbGVjdG9yKTtcbiAgICB0aGlzLl9jYXJkTnVtYmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fYmFza2V0U2V0dGluZy5jYXJkTnVtYmVyU2VsZWN0b3IpO1xuICAgIHRoaXMuX2NhcmREYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fYmFza2V0U2V0dGluZy5jYXJkRGF0ZVNlbGVjdG9yKTtcbiAgICB0aGlzLl9waWNrdXBUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9iYXNrZXRTZXR0aW5nLnBpY2t1cFR5cGVTZWxlY3Rvcik7XG4gICAgdGhpcy5fcGlja3VwU2lkZWJhclR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2Jhc2tldFNldHRpbmcucGlja3VwU2lkZWJhclR5cGVTZWxlY3Rvcik7XG4gICAgdGhpcy5fcGlja3VwRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fYmFza2V0U2V0dGluZy5waWNrdXBEYXRhU2VsZWN0b3IpO1xuICAgIHRoaXMuX3BpY2t1cEFkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2Jhc2tldFNldHRpbmcucGlja3VwQWRkcmVzc1NlbGVjdG9yKTtcbiAgICB0aGlzLl9waWNrdXBTaWRlYmFyQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fYmFza2V0U2V0dGluZy5waWNrdXBTaWRlYmFyQWRkcmVzc1NlbGVjdG9yKTtcbiAgICB0aGlzLl9waWNrdXBSYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9iYXNrZXRTZXR0aW5nLnBpY2t1cFJhdGVTZWxlY3Rvcik7XG4gICAgdGhpcy5fcGlja3VwT2ZmaWNlSG91cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2Jhc2tldFNldHRpbmcucGlja3VwT2ZmaWNlSG91cnNTZWxlY3Rvcik7XG4gICAgdGhpcy5fYmFza2V0VG90YWxQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fYmFza2V0U2V0dGluZy5iYXNrZXRUb3RhbFByaWNlU2VsZWN0b3IpO1xuICAgIHRoaXMuX2Jhc2tldFRvdGFsQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2Jhc2tldFNldHRpbmcuYmFza2V0VG90YWxDb3VudFNlbGVjdG9yKTtcbiAgICB0aGlzLl9iYXNrZXRUb3RhbE9sZFByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9iYXNrZXRTZXR0aW5nLmJhc2tldFRvdGFsT2xkUHJpY2VTZWxlY3Rvcik7XG4gICAgdGhpcy5fYmFza2V0VG90YWxEaXNjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fYmFza2V0U2V0dGluZy5iYXNrZXRUb3RhbERpc2NvdW50U2VsZWN0b3IpO1xuICAgIHRoaXMuX2Jhc2tldFRvdGFsRGVsaXZlcnlEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9iYXNrZXRTZXR0aW5nLmJhc2tldFRvdGFsRGVsaXZlcnlEYXRlU2VsZWN0b3IpO1xuICAgIHRoaXMuX2Jhc2tldERlbGl2ZXJ5RGF0ZUl0ZW1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9iYXNrZXRTZXR0aW5nLmJhc2tldERlbGl2ZXJ5RGF0ZUl0ZW1MaXN0U2VsZWN0b3IpO1xuICAgIHRoaXMuX2Jhc2tldENoZWNrYm94UGF5bWVudFR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2Jhc2tldFNldHRpbmcuYmFza2V0Q2hlY2tib3hQYXltZW50VHlwZVNlbGVjdG9yKTtcbiAgICB0aGlzLl9iYXNrZXRDaGVja2JveFBheW1lbnRUeXBlRGVjb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2Jhc2tldFNldHRpbmcuYmFza2V0Q2hlY2tib3hQYXltZW50VHlwZURlY29yU2VsZWN0b3IpO1xuICAgIHRoaXMuX2Jhc2tldFRvdGFsQnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9iYXNrZXRTZXR0aW5nLmJhc2tldFRvdGFsQnRuU3VibWl0U2VsZWN0b3IpO1xuICAgIHRoaXMuX2hlYWRlckljb25Db3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9iYXNrZXRTZXR0aW5nLmhlYWRlckljb25Db3VudGVyU2VsZWN0b3IpO1xuICAgIHRoaXMuX25hdmJhck1vYmlsZUljb25Db3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9iYXNrZXRTZXR0aW5nLm5hdmJhck1vYmlsZUljb25Db3VudGVyU2VsZWN0b3IpO1xuICAgIHRoaXMuX3RvdGFsUHJpY2UgPSBudWxsO1xuICAgIHRoaXMuX3RvdGFsQ291bnQgPSBudWxsO1xuICAgIHRoaXMuX2NvdW50ID0gbnVsbDtcbiAgICB0aGlzLl90b3RhbE9sZFByaWNlID0gbnVsbDtcbiAgICB0aGlzLl90b3RhbERpc2NvdW50ID0gbnVsbDtcbiAgICB0aGlzLmFsbFByb2R1Y3RDaGVja2JveElzQ2hlY2tlZCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gdG90YWwgZGlzY291bnRcblxuICBfcmVuZGVyVG90YWxEaXNjb3VudCA9ICgpID0+IHtcbiAgICB0aGlzLl9iYXNrZXRUb3RhbERpc2NvdW50LnRleHRDb250ZW50ID0gYOKIkiR7dGhpcy5fdG90YWxEaXNjb3VudC50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrJCkvZywgJyQxICcpfSDRgdC+0LxgO1xuICB9XG5cbiAgZGVjcmVhc2VUb3RhbERpc2NvdW50ID0gKHZhbHVlKSA9PiB7XG4gICAgdGhpcy5fdG90YWxEaXNjb3VudCAtPSB2YWx1ZTtcbiAgICB0aGlzLl9yZW5kZXJUb3RhbERpc2NvdW50KCk7XG4gIH1cblxuICBpbmNyZWFzZVRvdGFsRGlzY291bnQgPSAodmFsdWUpID0+IHsgLy8gK1xuICAgIHRoaXMuX3RvdGFsRGlzY291bnQgKz0gdmFsdWU7XG4gICAgdGhpcy5fcmVuZGVyVG90YWxEaXNjb3VudCgpO1xuICB9XG5cbiAgLy8gdG90YWwgb2xkIHByaWNlXG5cbiAgX3JlbmRlclRvdGFsT2xkUHJpY2UgPSAoKSA9PiB7XG4gICAgdGhpcy5fYmFza2V0VG90YWxPbGRQcmljZS50ZXh0Q29udGVudCA9IGAke3RoaXMuX3RvdGFsT2xkUHJpY2UudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyQpL2csICckMSAnKX0g0YHQvtC8YDtcbiAgfVxuXG4gIGRlY3JlYXNlVG90YWxPbGRQcmljZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHRoaXMuX3RvdGFsT2xkUHJpY2UgLT0gdmFsdWU7XG4gICAgdGhpcy5fcmVuZGVyVG90YWxPbGRQcmljZSgpO1xuICB9XG5cbiAgaW5jcmVhc2VUb3RhbE9sZFByaWNlID0gKHZhbHVlKSA9PiB7IC8vICtcbiAgICB0aGlzLl90b3RhbE9sZFByaWNlICs9IHZhbHVlO1xuICAgIHRoaXMuX3JlbmRlclRvdGFsT2xkUHJpY2UoKTtcbiAgfVxuXG4gIC8vIHRvdGFsIGNvdW50XG5cbiAgX3JlbmRlclRvdGFsQ291bnQgPSAoKSA9PiB7XG4gICAgdGhpcy5fYmFza2V0VG90YWxDb3VudC50ZXh0Q29udGVudCA9IGAke3RoaXMuX3RvdGFsQ291bnR9ICR7Z2V0RW5kTGluZSh0aGlzLl90b3RhbENvdW50LCBwcm9kdWN0c1RpdGxlcyl9YDtcblxuICAgIC8vIGNoYW5nZSB0ZXh0IGluIGJ0biwgZWxzZSBjaGVjayBpbnB1dFxuICAgIHRoaXMuX2NoYW5nZVRleHRUb3RhbEJ0bigpO1xuICB9XG5cbiAgZGVjcmVhc2VUb3RhbENvdW50ID0gKGNvdW50KSA9PiB7XG4gICAgdGhpcy5fdG90YWxDb3VudCAtPSBjb3VudDtcbiAgICB0aGlzLl9yZW5kZXJUb3RhbENvdW50KCk7XG4gIH1cblxuICBpbmNyZWFzZVRvdGFsQ291bnQgPSAoY291bnQpID0+IHsgLy8gK1xuICAgIHRoaXMuX3RvdGFsQ291bnQgKz0gY291bnQ7XG4gICAgdGhpcy5fcmVuZGVyVG90YWxDb3VudCgpO1xuICB9XG5cbiAgLy8gY291bnRcblxuICBfcmVuZGVyQ291bnQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuX2NvdW50IDw9IDApIHtcbiAgICAgIHRoaXMuX2hlYWRlckljb25Db3VudGVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICB0aGlzLl9uYXZiYXJNb2JpbGVJY29uQ291bnRlci50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oZWFkZXJJY29uQ291bnRlci50ZXh0Q29udGVudCA9IHRoaXMuX2NvdW50LnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLl9uYXZiYXJNb2JpbGVJY29uQ291bnRlci50ZXh0Q29udGVudCA9IHRoaXMuX2NvdW50LnRvU3RyaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgZGVjcmVhc2VDb3VudCA9ICh2YWx1ZSkgPT4ge1xuICAgIHRoaXMuX2NvdW50IC09IHZhbHVlO1xuICAgIHRoaXMuX3JlbmRlckNvdW50KCk7XG4gIH1cblxuICBpbmNyZWFzZUNvdW50ID0gKHZhbHVlKSA9PiB7IC8vICtcbiAgICB0aGlzLl9jb3VudCArPSB2YWx1ZTtcbiAgICB0aGlzLl9yZW5kZXJDb3VudCgpO1xuICB9XG5cbiAgLy8gdG90YWwgcHJpY2VcblxuICBfcmVuZGVyVG90YWxQcmljZSA9ICgpID0+IHtcbiAgICB0aGlzLl9iYXNrZXRUb3RhbFByaWNlLnRleHRDb250ZW50ID0gYCR7dGhpcy5fdG90YWxQcmljZS50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrJCkvZywgJyQxICcpfSDRgdC+0LxgO1xuICB9XG5cbiAgZGVjcmVhc2VUb3RhbFByaWNlID0gKHZhbHVlKSA9PiB7XG4gICAgdGhpcy5fdG90YWxQcmljZSAtPSB2YWx1ZTtcbiAgICB0aGlzLl9yZW5kZXJUb3RhbFByaWNlKCk7XG5cbiAgICBpZiAoIXRoaXMuY2hlY2tJbnB1dFByb2R1Y3RzKCkpIHtcbiAgICAgIHRoaXMuZGlzYWJsZUlucHV0QWxsUHJvZHVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIGluY3JlYXNlVG90YWxQcmljZSA9ICh2YWx1ZSkgPT4geyAvLyArXG4gICAgdGhpcy5fdG90YWxQcmljZSArPSB2YWx1ZTtcbiAgICB0aGlzLl9yZW5kZXJUb3RhbFByaWNlKCk7XG5cbiAgICBpZiAodGhpcy5jaGVja0lucHV0UHJvZHVjdHMoKSkge1xuICAgICAgdGhpcy5lbmFibGVJbnB1dEFsbFByb2R1Y3QoKTtcbiAgICB9XG4gIH1cblxuICAvLyBkZWxpdmVyeSBkYXRlXG5cbiAgX3JlbmRlclRvdGFsRGVsaXZlcnlEYXRlID0gKGZpcnN0RGF0ZSwgbGFzdERhdGUpID0+IHtcbiAgICBjb25zdCBmaXJzdE1vbnRoID0gZmlyc3REYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgbGFzdE1vbnRoID0gZmlyc3REYXRlLmdldE1vbnRoKCk7XG5cbiAgICBpZiAoZmlyc3RNb250aCA9PT0gbGFzdE1vbnRoKSB7XG4gICAgICB0aGlzLl9iYXNrZXRUb3RhbERlbGl2ZXJ5RGF0ZS50ZXh0Q29udGVudCA9XG4gICAgICAgIGAke2ZpcnN0RGF0ZS5nZXREYXRlKCl9LSR7bGFzdERhdGUuZ2V0RGF0ZSgpfSAke2RlbGl2ZXJ5TW9udGhUaXRsZXNbbGFzdE1vbnRoXS5zdWJzdHJpbmcoMCwgMyl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYmFza2V0VG90YWxEZWxpdmVyeURhdGUudGV4dENvbnRlbnQgPVxuICAgICAgICBgJHtmaXJzdERhdGUuZ2V0RGF0ZSgpfSAke2RlbGl2ZXJ5TW9udGhUaXRsZXNbZmlyc3RNb250aF0uc3Vic3RyaW5nKDAsIDMpfS0ke2xhc3REYXRlLmdldERhdGUoKX0gJHtkZWxpdmVyeU1vbnRoVGl0bGVzW2xhc3RNb250aF0uc3Vic3RyaW5nKDAsIDMpfWA7XG4gICAgfVxuICB9XG5cbiAgX2NhbGN1bGF0ZURlbGl2ZXJ5RGF0ZSA9IChhcnJheUxpc3QpID0+IHtcbiAgICBpZiAoYXJyYXlMaXN0Lmxlbmd0aCkge1xuICAgICAgY29uc3QgYXJyYXlEYXRhSXRlbXMgPSBbXTtcbiAgICAgIGNvbnN0IGFycmF5RGF0YUl0ZW1zUmVzdWx0ID0gW107XG4gICAgICBsZXQgZmlyc3REYXRlID0gSW5maW5pdHk7XG4gICAgICBsZXQgbGFzdERhdGUgPSAtSW5maW5pdHk7XG5cbiAgICAgIGFycmF5TGlzdC5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgICAgICBwcm9kdWN0LmRlbGl2ZXJ5RGF0ZS5mb3JFYWNoKGRhdGUgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGNvdW50IGluIGRhdGUpIHtcbiAgICAgICAgICAgIC8vIGZvciBkYXRlIHNpZGViYXJcbiAgICAgICAgICAgIGlmIChEYXRlLnBhcnNlKGRhdGVbY291bnRdWzBdKSA8IGZpcnN0RGF0ZSkgZmlyc3REYXRlID0gbmV3IERhdGUoZGF0ZVtjb3VudF1bMF0pO1xuICAgICAgICAgICAgaWYgKERhdGUucGFyc2UoZGF0ZVtjb3VudF1bMV0pID4gbGFzdERhdGUpIGxhc3REYXRlID0gbmV3IERhdGUoZGF0ZVtjb3VudF1bMV0pO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2R1Y3QuZGVsaXZlcnlEYXRlLmZvckVhY2goKGNvdW50KSA9PiB7XG4gICAgICAgICAgYXJyYXlEYXRhSXRlbXMucHVzaChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGF0ZTogW09iamVjdC52YWx1ZXMoY291bnQpWzBdWzBdLCBPYmplY3QudmFsdWVzKGNvdW50KVswXVsxXV0sXG4gICAgICAgICAgICAgIGl0ZW06IFt7IGNvdW50OiBPYmplY3Qua2V5cyhjb3VudClbMF0sIGltYWdlOiBwcm9kdWN0LmltYWdlIH1dLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICBhcnJheURhdGFJdGVtcy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICBpZiAoIWFycmF5RGF0YUl0ZW1zUmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgIC8vIGZpcnN0IGVsZW1lbnRcbiAgICAgICAgICBhcnJheURhdGFJdGVtc1Jlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIGRhdGU6IFtPYmplY3QudmFsdWVzKGRhdGEpWzBdWzBdLCBPYmplY3QudmFsdWVzKGRhdGEpWzBdWzFdXSxcbiAgICAgICAgICAgIGl0ZW06IFt7IGNvdW50OiBkYXRhLml0ZW1bMF0uY291bnQsIGltYWdlOiBkYXRhLml0ZW1bMF0uaW1hZ2UgfV0gfSAvLyBjaGFuZ2UgY291bnRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGFkZCBpdGVtIGluIGRhdGVcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5RGF0YUl0ZW1zUmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIERhdGUucGFyc2UobmV3IERhdGUoYXJyYXlEYXRhSXRlbXNSZXN1bHRbaV0uZGF0ZVswXSkpID09PSBEYXRlLnBhcnNlKG5ldyBEYXRlKE9iamVjdC52YWx1ZXMoZGF0YSlbMF1bMF0pKVxuICAgICAgICAgICAgICAmJiBEYXRlLnBhcnNlKG5ldyBEYXRlKGFycmF5RGF0YUl0ZW1zUmVzdWx0W2ldLmRhdGVbMF0pKSA9PT0gRGF0ZS5wYXJzZShuZXcgRGF0ZShPYmplY3QudmFsdWVzKGRhdGEpWzBdWzBdKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBhcnJheURhdGFJdGVtc1Jlc3VsdFtpXS5pdGVtLnB1c2goeyBjb3VudDogZGF0YS5pdGVtWzBdLmNvdW50LCBpbWFnZTogZGF0YS5pdGVtWzBdLmltYWdlIH0pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gYWRkIG5ldyBpdGVtXG4gICAgICAgICAgYXJyYXlEYXRhSXRlbXNSZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBkYXRlOiBbT2JqZWN0LnZhbHVlcyhkYXRhKVswXVswXSwgT2JqZWN0LnZhbHVlcyhkYXRhKVswXVsxXV0sXG4gICAgICAgICAgICBpdGVtOiBbeyBjb3VudDogZGF0YS5pdGVtWzBdLmNvdW50LCBpbWFnZTogZGF0YS5pdGVtWzBdLmltYWdlIH1dIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB0aGlzLl9yZW5kZXJUb3RhbERlbGl2ZXJ5RGF0ZShmaXJzdERhdGUsIGxhc3REYXRlKTtcblxuICAgICAgY29uc3QgZGVsaXZlcnlTbGljZSA9IHRoaXMuX3JlbmRlckRlbGl2ZXJpZXMoYXJyYXlEYXRhSXRlbXNSZXN1bHQpO1xuXG4gICAgICBkZWxpdmVyeVNsaWNlLnJlbW92ZUl0ZW1zKCk7XG4gICAgICBkZWxpdmVyeVNsaWNlLnJlbmRlckl0ZW1zKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRlbGl2ZXJ5U2xpY2UgPSB0aGlzLl9yZW5kZXJEZWxpdmVyaWVzKCk7XG5cbiAgICAgIGRlbGl2ZXJ5U2xpY2UucmVtb3ZlSXRlbXMoKTtcbiAgICB9XG4gIH1cblxuICAvLyBwcm9kdWN0IG1pc3NpbmdcblxuICBzZXRQcm9kdWN0TWlzc2luZyA9IChpdGVtKSA9PiB7XG4gICAgdGhpcy5fcHJvZHVjdExpc3RNaXNzaW5nQ29udGFpbmVyLnByZXBlbmQoaXRlbSk7XG4gIH1cblxuICAvLyBhY2NvcmRpb24gcHJpY2VcblxuICBfcmVuZGVyUHJpY2VCYXNrZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5fYWNjb3JkaW9uUHJvZHVjdFByaWNlRWxlbWVudC50ZXh0Q29udGVudCA9XG4gICAgICBgJHt0aGlzLl9hY2NvcmRpb25Qcm9kdWN0UHJpY2UudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyQpL2csICckMSAnKX0g0YHQvtC8YFxuICB9XG5cbiAgZGVjcmVhc2VQcmljZUJhc2tldCA9ICgpID0+IHtcbiAgICB0aGlzLl9yZW5kZXJQcmljZUJhc2tldCgtdmFsdWUpO1xuICB9XG5cbiAgaW5jcmVhc2VQcmljZUJhc2tldCA9ICh2YWx1ZSkgPT4geyAvLyArXG4gICAgdGhpcy5fYWNjb3JkaW9uUHJvZHVjdFByaWNlICs9IHZhbHVlO1xuICAgIHRoaXMuX3JlbmRlclByaWNlQmFza2V0KHRoaXMuX2FjY29yZGlvblByb2R1Y3RQcmljZSk7XG4gIH1cblxuICAvLyBhY2NvcmRpb24gY291bnRlclxuXG4gIF9yZW5kZXJDb3VudGVyQmFza2V0ID0gKHZhbHVlKSA9PiB7XG4gICAgdGhpcy5fYWNjb3JkaW9uUHJvZHVjdENvdW50RWxlbWVudC50ZXh0Q29udGVudCA9IGAke3ZhbHVlfSAke2dldEVuZExpbmUodmFsdWUsIHByb2R1Y3RzVGl0bGVzKX1gXG4gIH1cblxuICBkZWNyZWFzZUNvdW50ZXJCYXNrZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5fcmVuZGVyQ291bnRlckJhc2tldCh0aGlzLl9hY2NvcmRpb25Qcm9kdWN0Q291bnQgLT0gMSk7XG4gIH1cblxuICBpbmNyZWFzZUNvdW50ZXJCYXNrZXQgPSAoKSA9PiB7IC8vICtcbiAgICB0aGlzLl9yZW5kZXJDb3VudGVyQmFza2V0KHRoaXMuX2FjY29yZGlvblByb2R1Y3RDb3VudCArPSAxKTtcbiAgfVxuXG4gIC8vIGNhcmRzXG5cbiAgX3JlbmRlckNhcmRzID0gKGNhcmQpID0+IHtcbiAgICB0aGlzLl9jYXJkSWNvbnMuZm9yRWFjaChpY29uID0+IGljb24uc3JjID0gY2FyZC5kYXRhLmNhcmRVcmxJY29uKTtcbiAgICB0aGlzLl9jYXJkTnVtYmVycy5mb3JFYWNoKG51bWJlciA9PiBudW1iZXIudGV4dENvbnRlbnQgPSBjYXJkLmRhdGEuY2FyZE51bWJlcik7XG4gICAgdGhpcy5fY2FyZERhdGVzLmZvckVhY2goZGF0ZSA9PiBkYXRlLnRleHRDb250ZW50ID0gY2FyZC5kYXRhLmNhcmREYXRlKTtcbiAgfVxuXG4gIGNoYW5nZUNhcmQgPSAoY2FyZCkgPT4ge1xuICAgIHRoaXMuX3JlbmRlckNhcmRzKGNhcmQpO1xuICB9XG5cbiAgLy8gYWRkcmVzcyBkZWxpdmVyeVxuXG4gIF9yZW5kZXJBZGRyZXNzID0gKGFkZHJlc3MpID0+IHtcbiAgICB0aGlzLl9waWNrdXBBZGRyZXNzLnRleHRDb250ZW50ID0gYWRkcmVzcy5kYXRhLmFkZHJlc3M7XG4gICAgdGhpcy5fcGlja3VwU2lkZWJhckFkZHJlc3MudGV4dENvbnRlbnQgPSBhZGRyZXNzLmRhdGEuYWRkcmVzcztcblxuICAgIGlmIChhZGRyZXNzLnRlbXBsYXRlU2VsZWN0b3IgPT09IHRoaXMuX2Jhc2tldFNldHRpbmcucGlja3VwVGVtcGxhdGVTZWxlY3Rvcikge1xuICAgICAgdGhpcy5fcGlja3VwVHlwZS50ZXh0Q29udGVudCA9IHRoaXMuX2Jhc2tldFNldHRpbmcucGlja3VwVHlwZVRleHQ7XG4gICAgICB0aGlzLl9waWNrdXBTaWRlYmFyVHlwZS50ZXh0Q29udGVudCA9IHRoaXMuX2Jhc2tldFNldHRpbmcucGlja3VwU2lkZWJhclR5cGVUZXh0O1xuXG4gICAgICB0aGlzLl9waWNrdXBEYXRhLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fYmFza2V0U2V0dGluZy5waWNrdXBEYXRhSGlkZUNsYXNzKVxuICAgICAgdGhpcy5fcGlja3VwUmF0ZS50ZXh0Q29udGVudCA9IGFkZHJlc3MuZGF0YS5yYXRlO1xuICAgICAgdGhpcy5fcGlja3VwT2ZmaWNlSG91cnMudGV4dENvbnRlbnQgPSBhZGRyZXNzLmRhdGEub2ZmaWNlSG91cnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BpY2t1cFR5cGUudGV4dENvbnRlbnQgPSB0aGlzLl9iYXNrZXRTZXR0aW5nLnBpY2t1cFBvaW50VHlwZVRleHQ7XG4gICAgICB0aGlzLl9waWNrdXBEYXRhLmNsYXNzTGlzdC5hZGQodGhpcy5fYmFza2V0U2V0dGluZy5waWNrdXBEYXRhSGlkZUNsYXNzKTtcbiAgICAgIHRoaXMuX3BpY2t1cFNpZGViYXJUeXBlLnRleHRDb250ZW50ID0gdGhpcy5fYmFza2V0U2V0dGluZy5waWNrdXBQb2ludFNpZGViYXJUeXBlVGV4dDtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VBZGRyZXNzID0gKGFkZHJlc3MpID0+IHtcbiAgICB0aGlzLl9yZW5kZXJBZGRyZXNzKGFkZHJlc3MpO1xuICB9XG5cbiAgLy8gcHJvZHVjdHNcblxuICBjaGFuZ2VDb3VudFByb2R1Y3RMaXN0QXJyYXkgPSAocHJvZHVjdElkLCBjb3VudCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcHJvZHVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9wcm9kdWN0TGlzdFtpXS5pZCA9PT0gcHJvZHVjdElkKSB7XG4gICAgICAgIC8vIGdldCBjb3VudCBsYXN0IGRhdGVcbiAgICAgICAgY29uc3QgWyBjb3VudERhdGUgXSA9IE9iamVjdC5rZXlzKHRoaXMuX3Byb2R1Y3RMaXN0W2ldLmRlbGl2ZXJ5RGF0ZVt0aGlzLl9wcm9kdWN0TGlzdFtpXS5kZWxpdmVyeURhdGUubGVuZ3RoIC0gMV0pO1xuICAgICAgICAvLyBnZXQgZGF0ZXMgYXJyYXlcbiAgICAgICAgY29uc3QgdmFsdWVzRGF0ZSA9IE9iamVjdC52YWx1ZXModGhpcy5fcHJvZHVjdExpc3RbaV0uZGVsaXZlcnlEYXRlW3RoaXMuX3Byb2R1Y3RMaXN0W2ldLmRlbGl2ZXJ5RGF0ZS5sZW5ndGggLSAxXVtjb3VudERhdGVdKTtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBvYmplY3RcbiAgICAgICAgY29uc3QgbmV3T2JqID0geyBbY291bnRdOiB2YWx1ZXNEYXRlIH07XG4gICAgICAgIC8vIGFkZCBuZXcgb2JqXG4gICAgICAgIHRoaXMuX3Byb2R1Y3RMaXN0W2ldLmRlbGl2ZXJ5RGF0ZVt0aGlzLl9wcm9kdWN0TGlzdFtpXS5kZWxpdmVyeURhdGUubGVuZ3RoIC0gMV0gPSBuZXdPYmo7XG4gICAgICAgIC8vIHJlbW92ZSBvbGQgb2JqXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9wcm9kdWN0TGlzdFtpXS5kZWxpdmVyeURhdGVbdGhpcy5fcHJvZHVjdExpc3RbaV0uZGVsaXZlcnlEYXRlLmxlbmd0aCAtIDFdW2NvdW50RGF0ZV1cblxuICAgICAgICBpID0gdGhpcy5fcHJvZHVjdExpc3QubGVuZ3RoICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9jYWxjdWxhdGVEZWxpdmVyeURhdGUodGhpcy5fcHJvZHVjdExpc3QpO1xuICB9XG5cbiAgcmVtb3ZlUHJvZHVjdEluTGlzdEFycmF5ID0gKGlkRm9yRGVsZXRlQ2FyZCkgPT4ge1xuICAgIHRoaXMuX3Byb2R1Y3RMaXN0ID0gdGhpcy5fcHJvZHVjdExpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gaWRGb3JEZWxldGVDYXJkKTtcblxuICAgIHRoaXMuX2NhbGN1bGF0ZURlbGl2ZXJ5RGF0ZSh0aGlzLl9wcm9kdWN0TGlzdCk7XG4gIH1cblxuICBhZGRJbmljaWFsUHJvZHVjdEluTGlzdEFycmF5ID0gKCkgPT4ge1xuICAgIHRoaXMuX2NhbGN1bGF0ZURlbGl2ZXJ5RGF0ZSh0aGlzLl9wcm9kdWN0TGlzdCk7XG4gIH1cblxuICBhZGRQcm9kdWN0SW5MaXN0QXJyYXkgPSAocHJvZHVjdEl0ZW0pID0+IHtcbiAgICB0aGlzLl9wcm9kdWN0TGlzdCA9IHRoaXMuX3Byb2R1Y3RMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IHByb2R1Y3RJdGVtLmlkKVxuXG4gICAgdGhpcy5fcHJvZHVjdExpc3QucHVzaChwcm9kdWN0SXRlbSk7XG4gICAgdGhpcy5fY2FsY3VsYXRlRGVsaXZlcnlEYXRlKHRoaXMuX3Byb2R1Y3RMaXN0KTtcbiAgfVxuXG4gIGVuYWJsZUlucHV0QWxsUHJvZHVjdCA9ICgpID0+IHtcbiAgICB0aGlzLmFsbFByb2R1Y3RDaGVja2JveElzQ2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy5fYWNjb3JkaW9uQ2hlY2tib3hBbGxQcm9kdWN0LmNoZWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgZGlzYWJsZUlucHV0QWxsUHJvZHVjdCA9ICgpID0+IHtcbiAgICB0aGlzLmFsbFByb2R1Y3RDaGVja2JveElzQ2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2FjY29yZGlvbkNoZWNrYm94QWxsUHJvZHVjdC5jaGVja2VkID0gZmFsc2U7XG4gIH1cblxuICBlbmFibGVBbGxQcm9kdWN0cyA9ICgpID0+IHtcbiAgICB0aGlzLmVuYWJsZUlucHV0QWxsUHJvZHVjdCgpO1xuXG4gICAgdGhpcy5faW5pdGlhbFByb2R1Y3RMaXN0LmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICBpZiAoIXByb2R1Y3QuaXNDaGVja2VkKSB7XG4gICAgICAgIHByb2R1Y3QuZW5hYmxlSW5wdXQoKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBjaGVja0lucHV0UHJvZHVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuX2luaXRpYWxQcm9kdWN0TGlzdC5ldmVyeShwcm9kdWN0ID0+IHByb2R1Y3QuaXNDaGVja2VkKTtcbiAgfVxuXG4gIC8vIHRvdGFsIGNoZWNrYm94IGFuZCBidG4gc3VibWl0XG5cbiAgX2NoYW5nZVRleHRUb3RhbEJ0biA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5fYmFza2V0Q2hlY2tib3hQYXltZW50VHlwZS5jaGVja2VkKSB7XG4gICAgICB0aGlzLl90b3RhbFByaWNlLnRvU3RyaW5nKCkubGVuZ3RoID4gNVxuICAgICAgICA/IHRoaXMuX2Jhc2tldFRvdGFsQnRuU3VibWl0LmNsYXNzTGlzdC5hZGQodGhpcy5fYmFza2V0U2V0dGluZy5iYXNrZXRPcmRlckJ0blNtYWxsVGV4dENsYXNzKVxuICAgICAgICA6IHRoaXMuX2Jhc2tldFRvdGFsQnRuU3VibWl0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fYmFza2V0U2V0dGluZy5iYXNrZXRPcmRlckJ0blNtYWxsVGV4dENsYXNzKTtcblxuICAgICAgdGhpcy5fYmFza2V0VG90YWxCdG5TdWJtaXQudGV4dENvbnRlbnQgPVxuICAgICAgICBg0J7Qv9C70LDRgtC40YLRjCAke3RoaXMuX3RvdGFsUHJpY2UudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyQpL2csICckMSAnKX0g0YHQvtC8YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYmFza2V0VG90YWxCdG5TdWJtaXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9iYXNrZXRTZXR0aW5nLmJhc2tldE9yZGVyQnRuU21hbGxUZXh0Q2xhc3MpO1xuICAgICAgdGhpcy5fYmFza2V0VG90YWxCdG5TdWJtaXQudGV4dENvbnRlbnQgPSAn0JfQsNC60LDQt9Cw0YLRjCc7XG4gICAgfVxuICB9XG5cbiAgX3RvZ2dsZUlucHV0UGF5bWVudFR5cGUgPSAoKSA9PiB7XG4gICAgdGhpcy5fYmFza2V0Q2hlY2tib3hQYXltZW50VHlwZS5jaGVja2VkID0gIXRoaXMuX2Jhc2tldENoZWNrYm94UGF5bWVudFR5cGUuY2hlY2tlZDtcblxuICAgIHRoaXMuX2NoYW5nZVRleHRUb3RhbEJ0bigpO1xuICB9XG5cbiAgLy8gc2V0IGxpc3RlbmVyc1xuXG4gIHNldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuX2FjY29yZGlvbkNoZWNrYm94QWxsUHJvZHVjdERlY29yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmFsbFByb2R1Y3RDaGVja2JveElzQ2hlY2tlZCkge1xuICAgICAgICB0aGlzLmVuYWJsZUFsbFByb2R1Y3RzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc2FibGVJbnB1dEFsbFByb2R1Y3QoKTtcblxuICAgICAgICB0aGlzLl9pbml0aWFsUHJvZHVjdExpc3QuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgICAgICBpZiAocHJvZHVjdC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHByb2R1Y3QuZGlzYWJsZUlucHV0KCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuX2Jhc2tldENoZWNrYm94UGF5bWVudFR5cGVEZWNvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX3RvZ2dsZUlucHV0UGF5bWVudFR5cGUoKTtcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgY2FyZFNldHRpbmcsIGRpc2FibGVkQWxsSW5wdXRzKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLl9jYXJkU2V0dGluZyA9IGNhcmRTZXR0aW5nO1xuICAgIHRoaXMuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy5fZGlzYWJsZWRBbGxJbnB1dHMgPSBkaXNhYmxlZEFsbElucHV0cztcbiAgfVxuXG4gIF9nZXRUZW1wbGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2V0dGluZy5jYXJkVGVtcGxhdGVTZWxlY3RvcilcbiAgICAgIC5jb250ZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2V0dGluZy5jYXJkU2VsZWN0b3IpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5fY2FyZElucHV0RGVjb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNDaGVja2VkKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkQWxsSW5wdXRzKCk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVJbnB1dCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlSW5wdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5pc0NoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMuX2NhcmRJbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGRpc2FibGVJbnB1dCA9ICgpID0+IHtcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2NhcmRJbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gIH1cblxuICBnZW5lcmF0ZUNhcmQgPSAoKSA9PiB7XG4gICAgdGhpcy5fY2FyZCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XG4gICAgdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZXR0aW5nLmNhcmROdW1iZXJTZWxlY3RvcikudGV4dENvbnRlbnQgPSB0aGlzLmRhdGEuY2FyZE51bWJlcjtcbiAgICB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNldHRpbmcuY2FyZEljb25TZWxlY3Rvcikuc3JjID0gdGhpcy5kYXRhLmNhcmRVcmxJY29uO1xuXG4gICAgdGhpcy5fY2FyZElucHV0ID0gdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZXR0aW5nLmNhcmRJbnB1dFNlbGVjb3IpO1xuICAgIHRoaXMuX2NhcmRJbnB1dERlY29yID0gdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZXR0aW5nLmNhcmRJbnB1dERlY29yU2VsZWNvcik7XG5cbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVyKCk7XG5cbiAgICByZXR1cm4gdGhpcy5fY2FyZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZGVsaXZlcnlNb250aFRpdGxlcyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbGl2ZXJ5IHtcbiAgY29uc3RydWN0b3IoZGF0YSwgZGVsaXZlcnlEYXRlSXRlbVNldHRpbmcpIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLl9kYXRhSXRlbXMgPSB0aGlzLl9kYXRhLml0ZW07XG4gICAgdGhpcy5fZGVsaXZlcnlEYXRlSXRlbVNldHRpbmcgPSBkZWxpdmVyeURhdGVJdGVtU2V0dGluZztcbiAgfVxuXG4gIF9nZXREZWxpdmVyeUl0ZW1UZW1wbGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBkZWxpdmVyeUl0ZW1FbGVtZW50ID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcjYmFza2V0LWRlbGl2ZXJ5LWl0ZW0nKVxuICAgICAgLmNvbnRlbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZGVsaXZlcnlfX2l0ZW0taW1nJylcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICByZXR1cm4gZGVsaXZlcnlJdGVtRWxlbWVudDtcbiAgfVxuXG4gIF9nZW5lcmF0ZURlbGl2ZXJ5SXRlbSA9IChpdGVtKSA9PiB7XG4gICAgdGhpcy5fZGVsaXZlcnlEYXRlSXRlbSA9IHRoaXMuX2dldERlbGl2ZXJ5SXRlbVRlbXBsYXRlKCk7XG5cbiAgICB0aGlzLl9kZWxpdmVyeURhdGVJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kZWxpdmVyeV9fcHJvZHVjdC1pbWcnKS5zcmMgPSBpdGVtLmltYWdlO1xuICAgIHRoaXMuX2RlbGl2ZXJ5RGF0ZUl0ZW0ucXVlcnlTZWxlY3RvcignLmRlbGl2ZXJ5X19jb3VudC1sYWJlbCcpLnRleHRDb250ZW50ID0gaXRlbS5jb3VudDtcblxuICAgIHJldHVybiB0aGlzLl9kZWxpdmVyeURhdGVJdGVtO1xuICB9XG5cbiAgX2dldERhdGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0RGF0ZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGEuZGF0ZVswXSkuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IGxhc3REYXRlID0gbmV3IERhdGUodGhpcy5fZGF0YS5kYXRlWzFdKS5nZXREYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZSh0aGlzLl9kYXRhLmRhdGVbMV0pLmdldE1vbnRoKCk7XG5cbiAgICByZXR1cm4gYCR7Zmlyc3REYXRlfeKAlCR7bGFzdERhdGV9ICR7ZGVsaXZlcnlNb250aFRpdGxlc1ttb250aF19YFxuICB9XG5cbiAgX2dldERlbGl2ZXJ5VGVtcGxhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGVsaXZlcnlFbGVtZW50ID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcjYmFza2V0LWRlbGl2ZXJ5JylcbiAgICAgIC5jb250ZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLmRlbGl2ZXJ5X19pdGVtJylcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICByZXR1cm4gZGVsaXZlcnlFbGVtZW50O1xuICB9XG5cbiAgZ2VuZXJhdGVEZWxpdmVyeSA9ICgpID0+IHtcbiAgICB0aGlzLl9kZWxpdmVyeURhdGUgPSB0aGlzLl9nZXREZWxpdmVyeVRlbXBsYXRlKCk7XG5cbiAgICB0aGlzLl9kZWxpdmVyeURhdGUuXG4gICAgICBxdWVyeVNlbGVjdG9yKCcuZGVsaXZlcnlfX2xhYmVsJylcbiAgICAgIC50ZXh0Q29udGVudCA9IHRoaXMuX2dldERhdGVzKCk7XG5cbiAgICB0aGlzLl9kZWxpdmVyeUl0ZW1Db250YWluZXIgPSB0aGlzLl9kZWxpdmVyeURhdGUucXVlcnlTZWxlY3RvcignLmRlbGl2ZXJ5X19wcm9kdWN0LWxpc3QnKTtcblxuICAgIHRoaXMuX2RhdGFJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgdGhpcy5fZGVsaXZlcnlJdGVtQ29udGFpbmVyLnByZXBlbmQodGhpcy5fZ2VuZXJhdGVEZWxpdmVyeUl0ZW0oaXRlbSkpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gdGhpcy5fZGVsaXZlcnlEYXRlO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0XG5jbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IoZm9ybVNldHRpbmcsIGZvcm0pIHtcbiAgICB0aGlzLl9mb3JtU2V0dGluZyA9IGZvcm1TZXR0aW5nO1xuICAgIHRoaXMuX2Zvcm0gPSBmb3JtO1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2Zvcm1TZXR0aW5nLmlucHV0U2VsZWN0b3IpKTtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX2Zvcm1TZXR0aW5nLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcbiAgfVxuXG4gIF9oYXNJbnZhbGlkSW5wdXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+ICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpO1xuICB9XG5cbiAgX3RvZ2dsZUJ1dHRvblN0YXRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoKSkge1xuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBfaGlkZUlucHV0RXJyb3IgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XG5cbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9mb3JtU2V0dGluZy5pbnB1dEVycm9yQ2xhc3MpO1xuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Zvcm1TZXR0aW5nLmVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX3Nob3dJbnB1dEVycm9yID0gKGlucHV0RWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xuXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZm9ybVNldHRpbmcuaW5wdXRFcnJvckNsYXNzKTtcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9mb3JtU2V0dGluZy5lcnJvckNsYXNzKTtcbiAgfVxuXG4gIF9jaGVja0lucHV0VmFsaWRpdHkgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKSAvLyBjaGVja1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGlmIChpbnB1dEVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG5cbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaWNrdXAge1xuICBjb25zdHJ1Y3RvcihkYXRhLCB0ZW1wbGF0ZVNlbGVjdG9yLCBlbGVtZW50U2V0dGluZywgZGlzYWJsZWRBbGxJbnB1dHMpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuX2VsZW1lbnRTZXR0aW5nID0gZWxlbWVudFNldHRpbmc7XG4gICAgdGhpcy50ZW1wbGF0ZVNlbGVjdG9yID0gdGVtcGxhdGVTZWxlY3RvcjtcbiAgICB0aGlzLl9waWNrdXB0U2VsZWN0b3IgPSB0aGlzLl9lbGVtZW50U2V0dGluZy5waWNrdXBTZWxlY3RvcjtcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2Rpc2FibGVkQWxsSW5wdXRzID0gZGlzYWJsZWRBbGxJbnB1dHM7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lciA9IChlbGVtZW50Rm9yRGVsZXRlKSA9PiB7XG4gICAgdGhpcy5fZWxlbWVudElucHV0RGVjb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNDaGVja2VkKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkQWxsSW5wdXRzKCk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVJbnB1dCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fZWxlbWVudEJ0bkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGVsZW1lbnRGb3JEZWxldGUucmVtb3ZlKCk7XG4gICAgfSlcbiAgfVxuXG4gIF9nZXRUZW1wbGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMudGVtcGxhdGVTZWxlY3RvcilcbiAgICAgIC5jb250ZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9waWNrdXB0U2VsZWN0b3IpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBlbmFibGVJbnB1dCA9ICgpID0+IHtcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy5fZWxlbWVudElucHV0LmNoZWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgZGlzYWJsZUlucHV0ID0gKCkgPT4ge1xuICAgIHRoaXMuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy5fZWxlbWVudElucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGdlbmVyYXRlUGlja3VwRWxlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLl9waWNrdXBFbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcbiAgICB0aGlzLl9waWNrdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fZWxlbWVudFNldHRpbmcucGlja3VwQWRkcmVzc1NlbGVjdG9yKS50ZXh0Q29udGVudCA9IHRoaXMuZGF0YS5hZGRyZXNzO1xuXG4gICAgdGhpcy5fZWxlbWVudElucHV0ID0gdGhpcy5fcGlja3VwRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2VsZW1lbnRTZXR0aW5nLnBpY2t1cElucHV0U2VsZWNvcik7XG4gICAgdGhpcy5fZWxlbWVudElucHV0RGVjb3IgPSB0aGlzLl9waWNrdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fZWxlbWVudFNldHRpbmcucGlja3VwSW5wdXREZWNvclNlbGVjb3IpO1xuXG4gICAgdGhpcy5fZWxlbWVudEJ0bkRlbGV0ZSA9IHRoaXMuX3BpY2t1cEVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9lbGVtZW50U2V0dGluZy5waWNrdXBCdG5EZWxldGVTZWxlY29yKTtcblxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXIodGhpcy5fcGlja3VwRWxlbWVudCk7XG5cbiAgICByZXR1cm4gdGhpcy5fcGlja3VwRWxlbWVudDtcbiAgfVxuXG4gIGdlbmVyYXRlUGlja3VwUG9pbnRFbGVtZW50ID0gKCkgPT4ge1xuICAgIHRoaXMuX3BpY2t1cFBvaW50RWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XG4gICAgdGhpcy5fcGlja3VwUG9pbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fZWxlbWVudFNldHRpbmcucGlja3VwQWRkcmVzc1NlbGVjdG9yKS50ZXh0Q29udGVudCA9IHRoaXMuZGF0YS5hZGRyZXNzO1xuICAgIHRoaXMuX3BpY2t1cFBvaW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2VsZW1lbnRTZXR0aW5nLnBpY2t1cFBvaW50UmF0ZVNlbGVjdG9yKS50ZXh0Q29udGVudCA9IHRoaXMuZGF0YS5yYXRlO1xuXG4gICAgdGhpcy5fZWxlbWVudElucHV0ID0gdGhpcy5fcGlja3VwUG9pbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fZWxlbWVudFNldHRpbmcucGlja3VwSW5wdXRTZWxlY29yKTtcbiAgICB0aGlzLl9lbGVtZW50SW5wdXREZWNvciA9IHRoaXMuX3BpY2t1cFBvaW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2VsZW1lbnRTZXR0aW5nLnBpY2t1cElucHV0RGVjb3JTZWxlY29yKTtcblxuICAgIHRoaXMuX2VsZW1lbnRCdG5EZWxldGUgPSB0aGlzLl9waWNrdXBQb2ludEVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9lbGVtZW50U2V0dGluZy5waWNrdXBCdG5EZWxldGVTZWxlY29yKTtcblxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXIodGhpcy5fcGlja3VwUG9pbnRFbGVtZW50KTtcblxuICAgIHJldHVybiB0aGlzLl9waWNrdXBQb2ludEVsZW1lbnQ7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX2hhbmRsZUVzY0Nsb3NlID0gKHsga2V5IH0pID0+IHtcbiAgICBpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBzZXRFdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfc2hvd24nKSB8fCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9fY2xvc2UnKSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfTtcblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9zaG93bicpO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfTtcblxuICBvcGVuKCkge1xuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwX3Nob3duJyk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9O1xufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aENob29zZUFkZHJlc3MgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIHBpY2t1cEFkZHJlc3NMaXN0LCBwaWNrdXBQb2ludEFkZHJlc3NMaXN0LCBoYW5kbGVDaGFuZ2VFbGVtZW50KSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9waWNrdXBBZGRyZXNzTGlzdCA9IHBpY2t1cEFkZHJlc3NMaXN0O1xuICAgIHRoaXMuX3BpY2t1cFBvaW50QWRkcmVzc0xpc3QgPSBwaWNrdXBQb2ludEFkZHJlc3NMaXN0O1xuICAgIHRoaXMuX3BvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19idG5bZGF0YS10eXBlPVwiYnRuLXBvcHVwLWNob29zZS1hZGRyZXNzXCJdJyk7XG4gICAgdGhpcy5fcG9wdXBQaWNrdXBUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3RhYnMtaXRlbVtkYXRhLXR5cGU9XCJwb3B1cC10YWItcGlja3VwXCJdJyk7XG4gICAgdGhpcy5fcG9wdXBQaWNrdXBCbG9ja1dpdGhUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3RhYnMtYmxvY2tbZGF0YS10eXBlPVwicG9wdXAtdGFiLXBpY2t1cC1ibG9ja1wiXScpO1xuICAgIHRoaXMuX3BvcHVwUGlja3VwUG9pbnRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3RhYnMtaXRlbVtkYXRhLXR5cGU9XCJwb3B1cC10YWItcGlja3VwLXBvaW50XCJdJyk7XG4gICAgdGhpcy5fcG9wdXBQaWNrdXBQb2ludEJsb2NrV2l0aFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fdGFicy1ibG9ja1tkYXRhLXR5cGU9XCJwb3B1cC10YWItcGlja3VwLXBvaW50LWJsb2NrXCJdJyk7XG4gICAgdGhpcy5faGFuZGxlQ2hhbmdlRWxlbWVudCA9IGhhbmRsZUNoYW5nZUVsZW1lbnQ7XG4gICAgdGhpcy5fdGFic0l0ZW1zID0gW3RoaXMuX3BvcHVwUGlja3VwVGFiLCB0aGlzLl9wb3B1cFBpY2t1cFBvaW50VGFiXTtcbiAgICB0aGlzLl90YWJzSXRlbXNCbG9ja3MgPSBbdGhpcy5fcG9wdXBQaWNrdXBCbG9ja1dpdGhUYWIsIHRoaXMuX3BvcHVwUGlja3VwUG9pbnRCbG9ja1dpdGhUYWJdXG4gIH1cblxuICBfc2V0QWN0aXZlVGFiID0gKCkgPT4ge1xuICAgIHRoaXMuX3RhYnNJdGVtcy5mb3JFYWNoKHRhYiA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXBfX3RhYnMtaXRlbV9hY3RpdmUnKSk7XG4gICAgdGhpcy5fdGFic0l0ZW1zQmxvY2tzLmZvckVhY2goYmxvY2sgPT4gYmxvY2suc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlVGFiKSB7XG4gICAgICB0aGlzLl9hY3RpdmVUYWIuY2xhc3NMaXN0LmFkZCgncG9wdXBfX3RhYnMtaXRlbV9hY3RpdmUnKTtcbiAgICAgIHRoaXMuX3RhYnNJdGVtc0Jsb2Nrc1t0aGlzLl90YWJzSXRlbXMuaW5kZXhPZih0aGlzLl9hY3RpdmVUYWIpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGFic0l0ZW1zW3RoaXMuX3RhYnNJdGVtcy5sZW5ndGggLSAxXS5jbGFzc0xpc3QuYWRkKCdwb3B1cF9fdGFicy1pdGVtX2FjdGl2ZScpO1xuICAgICAgdGhpcy5fdGFic0l0ZW1zQmxvY2tzW3RoaXMuX3RhYnNJdGVtc0Jsb2Nrcy5sZW5ndGggLSAxXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH1cblxuICBzZXRJbml0aWFsQWRkcmVzcyA9ICgpID0+IHtcbiAgICB0aGlzLl90YWJzSXRlbXNbdGhpcy5fdGFic0l0ZW1zLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5hZGQoJ3BvcHVwX190YWJzLWl0ZW1fYWN0aXZlJyk7XG5cbiAgICB0aGlzLl9waWNrdXBQb2ludEFkZHJlc3NMaXN0W3RoaXMuX3BpY2t1cFBvaW50QWRkcmVzc0xpc3QubGVuZ3RoIC0gMV0uZW5hYmxlSW5wdXQoKTtcbiAgICB0aGlzLl9oYW5kbGVDaGFuZ2VFbGVtZW50KHRoaXMuX3BpY2t1cFBvaW50QWRkcmVzc0xpc3RbdGhpcy5fcGlja3VwUG9pbnRBZGRyZXNzTGlzdC5sZW5ndGggLSAxXSk7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVyID0gKCkgPT4ge1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXIoKTtcblxuICAgIHRoaXMuX3BvcHVwUGlja3VwVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICB0aGlzLl9wb3B1cFBpY2t1cFBvaW50QmxvY2tXaXRoVGFiLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLl9wb3B1cFBpY2t1cFBvaW50VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwX190YWJzLWl0ZW1fYWN0aXZlJyk7XG4gICAgICB0aGlzLl9wb3B1cFBpY2t1cEJsb2NrV2l0aFRhYi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuX3BvcHVwUGlja3VwVGFiLmNsYXNzTGlzdC5hZGQoJ3BvcHVwX190YWJzLWl0ZW1fYWN0aXZlJyk7XG4gICAgfSlcblxuICAgIHRoaXMuX3BvcHVwUGlja3VwUG9pbnRUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgIHRoaXMuX3BvcHVwUGlja3VwQmxvY2tXaXRoVGFiLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLl9wb3B1cFBpY2t1cFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9fdGFicy1pdGVtX2FjdGl2ZScpO1xuICAgICAgdGhpcy5fcG9wdXBQaWNrdXBQb2ludEJsb2NrV2l0aFRhYi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuX3BvcHVwUGlja3VwUG9pbnRUYWIuY2xhc3NMaXN0LmFkZCgncG9wdXBfX3RhYnMtaXRlbV9hY3RpdmUnKTtcbiAgICB9KVxuXG4gICAgdGhpcy5fcG9wdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9hY3RpdmVBZGRyZXNzID0gdGhpcy5fY2hhbmdlRWxlbWVudCgpO1xuICAgICAgdGhpcy5fYWN0aXZlVGFiID0gdGhpcy5fdGFic0l0ZW1zLmZpbmQodGFiID0+IHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX190YWJzLWl0ZW1fYWN0aXZlJykpO1xuXG4gICAgICB0aGlzLl9oYW5kbGVDaGFuZ2VFbGVtZW50KHRoaXMuX2FjdGl2ZUFkZHJlc3MpO1xuXG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSlcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHN1cGVyLmNsb3NlKCk7XG5cbiAgICB0aGlzLmRpc2FibGVkQWxsSW5wdXRzKCk7XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlQWRkcmVzcykgdGhpcy5fYWN0aXZlQWRkcmVzcy5lbmFibGVJbnB1dCgpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICBzdXBlci5vcGVuKCk7XG5cbiAgICB0aGlzLl9zZXRBY3RpdmVUYWIoKTtcbiAgICBpZiAoIXRoaXMuX2FjdGl2ZUFkZHJlc3MpIHRoaXMuc2V0SW5pdGlhbEFkZHJlc3MoKTtcbiAgfVxuXG4gIGRpc2FibGVkQWxsSW5wdXRzID0gKCkgPT4ge1xuICAgIHRoaXMuX3BpY2t1cEFkZHJlc3NMaXN0LmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmRpc2FibGVJbnB1dCgpKTtcbiAgICB0aGlzLl9waWNrdXBQb2ludEFkZHJlc3NMaXN0LmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmRpc2FibGVJbnB1dCgpKTtcbiAgfVxuXG4gIF9jaGFuZ2VFbGVtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPVxuICAgICAgdGhpcy5fcGlja3VwQWRkcmVzc0xpc3QuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuaXNDaGVja2VkKSB8fFxuICAgICAgdGhpcy5fcGlja3VwUG9pbnRBZGRyZXNzTGlzdC5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5pc0NoZWNrZWQpXG5cbiAgICByZXR1cm4gYWN0aXZlRWxlbWVudDtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aENob29zZVBheSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvciwgY2FyZExpc3QsIGhhbmRsZUNoYW5nZUNhcmQpIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcblxuICAgIHRoaXMuX2NhcmRMaXN0ID0gY2FyZExpc3Q7XG4gICAgdGhpcy5fY2FyZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fYnRuW2RhdGEtdHlwZT1cImJ0bi1wb3B1cC1jaG9vc2UtcGF5XCJdJyk7XG4gICAgdGhpcy5faGFuZGxlQ2hhbmdlQ2FyZCA9IGhhbmRsZUNoYW5nZUNhcmQ7XG4gIH1cblxuICBzZXRJbml0aWFsQ2FyZCA9ICgpID0+IHtcbiAgICB0aGlzLl9hY3RpdmVDYXJkID0gdGhpcy5fY2FyZExpc3RbdGhpcy5fY2FyZExpc3QubGVuZ3RoIC0gMV07XG4gICAgdGhpcy5fYWN0aXZlQ2FyZC5lbmFibGVJbnB1dCgpO1xuICAgIHRoaXMuX2hhbmRsZUNoYW5nZUNhcmQodGhpcy5fY2FyZExpc3RbdGhpcy5fY2FyZExpc3QubGVuZ3RoIC0gMV0pO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVyKCk7XG5cbiAgICB0aGlzLl9jYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5fYWN0aXZlQ2FyZCA9IHRoaXMuX2NoYW5nZUNhcmQoKTtcbiAgICAgIHRoaXMuZGlzYWJsZWRBbGxJbnB1dHMoKTtcblxuICAgICAgdGhpcy5faGFuZGxlQ2hhbmdlQ2FyZCh0aGlzLl9hY3RpdmVDYXJkKTtcblxuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pXG4gIH1cblxuICBkaXNhYmxlZEFsbElucHV0cyA9ICgpID0+IHtcbiAgICB0aGlzLl9jYXJkTGlzdC5mb3JFYWNoKGNhcmQgPT4gY2FyZC5kaXNhYmxlSW5wdXQoKSk7XG4gIH1cblxuICBfY2hhbmdlQ2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBhY3RpdmVDYXJkID0gdGhpcy5fY2FyZExpc3QuZmluZChjYXJkID0+IGNhcmQuaXNDaGVja2VkKTtcblxuICAgIHJldHVybiBhY3RpdmVDYXJkO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICBzdXBlci5vcGVuKCk7XG5cbiAgICB0aGlzLl9jYXJkTGlzdC5mb3JFYWNoKGNhcmQgPT4gY2FyZC5kaXNhYmxlSW5wdXQoKSk7XG5cbiAgICB0aGlzLl9hY3RpdmVDYXJkLmVuYWJsZUlucHV0KCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBkYXRhLFxuICAgIHByb2R1Y3RTZXR0aW5nLFxuICAgIGhhbmRsZUFkZFByb2R1Y3RUb0FycmF5LFxuICAgIGhhbmRsZVJlbW92ZVByb2R1Y3RGcm9tQXJyYXksXG4gICAgaGFuZGxlQ2hhbmdlQ291bnRQcm9kdWN0SW5BcnJheSxcbiAgICBoYW5kbGVEZWNyZWFzZUFjY29yZGlvbkNvdW50ZXIsXG4gICAgaGFuZGxlSW5jcmVhc2VBY2NvcmRpb25Db3VudGVyLFxuICAgIGhhbmRsZURlY3JlYXNlQWNjb3JkaW9uUHJpY2UsXG4gICAgaGFuZGxlSW5jcmVhc2VBY2NvcmRpb25QcmljZSxcbiAgICBoYW5kbGVEZWNyZWFzZVRvdGFsUHJpY2UsXG4gICAgaGFuZGxlSW5jcmVhc2VUb3RhbFByaWNlLFxuICAgIGhhbmRsZURlY3JlYXNlVG90YWxDb3VudCxcbiAgICBoYW5kbGVJbmNyZWFzZVRvdGFsQ291bnQsXG4gICAgaGFuZGxlRGVjcmVhc2VUb3RhbE9sZFByaWNlLFxuICAgIGhhbmRsZUluY3JlYXNlVG90YWxPbGRQcmljZSxcbiAgICBoYW5kbGVEZWNyZWFzZVRvdGFsRGlzY291bnQsXG4gICAgaGFuZGxlSW5jcmVhc2VUb3RhbERpc2NvdW50LFxuICAgIGhhbmRsZURlY3JlYXNlQ291bnQsXG4gICAgaGFuZGxlSW5jcmVhc2VDb3VudCxcbiAgICBoYW5kbGVDaGVja0lucHV0UHJvZHVjdHMsXG4gICAgaGFuZGxlRGlzYWJsZUlucHV0QWxsUHJvZHVjdCxcbiAgICBoYW5kbGVFbmFibGVJbnB1dEFsbFByb2R1Y3QsXG4gICAgaGFuZGxlU2V0UHJvZHVjdE1pc3NpbmcsXG4gICkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuX29sZFByaWNlID0gZGF0YS5vbGRQcmljZTtcbiAgICB0aGlzLl9wcm9kdWN0U2V0dGluZyA9IHByb2R1Y3RTZXR0aW5nO1xuICAgIHRoaXMuX2hhbmRsZUFkZFByb2R1Y3QgPSBoYW5kbGVBZGRQcm9kdWN0VG9BcnJheTtcbiAgICB0aGlzLl9oYW5kbGVSZW1vdmVQcm9kdWN0ID0gaGFuZGxlUmVtb3ZlUHJvZHVjdEZyb21BcnJheTtcbiAgICB0aGlzLl9oYW5kbGVDaGFuZ2VDb3VudFByb2R1Y3RJbkFycmF5ID0gaGFuZGxlQ2hhbmdlQ291bnRQcm9kdWN0SW5BcnJheTtcbiAgICB0aGlzLl9oYW5kbGVEZWNyZWFzZUFjY29yZGlvbkNvdW50ZXIgPSBoYW5kbGVEZWNyZWFzZUFjY29yZGlvbkNvdW50ZXI7XG4gICAgdGhpcy5faGFuZGxlSW5jcmVhc2VBY2NvcmRpb25Db3VudGVyID0gaGFuZGxlSW5jcmVhc2VBY2NvcmRpb25Db3VudGVyO1xuICAgIHRoaXMuX2hhbmRsZURlY3JlYXNlQWNjb3JkaW9uUHJpY2UgPSBoYW5kbGVEZWNyZWFzZUFjY29yZGlvblByaWNlO1xuICAgIHRoaXMuX2hhbmRsZUluY3JlYXNlQWNjb3JkaW9uUHJpY2UgPSBoYW5kbGVJbmNyZWFzZUFjY29yZGlvblByaWNlO1xuICAgIHRoaXMuX2hhbmRsZURlY3JlYXNlVG90YWxQcmljZSA9IGhhbmRsZURlY3JlYXNlVG90YWxQcmljZTtcbiAgICB0aGlzLl9oYW5kbGVJbmNyZWFzZVRvdGFsUHJpY2UgPSBoYW5kbGVJbmNyZWFzZVRvdGFsUHJpY2U7XG4gICAgdGhpcy5faGFuZGxlRGVjcmVhc2VUb3RhbENvdW50ID0gaGFuZGxlRGVjcmVhc2VUb3RhbENvdW50O1xuICAgIHRoaXMuX2hhbmRsZUluY3JlYXNlVG90YWxDb3VudCA9IGhhbmRsZUluY3JlYXNlVG90YWxDb3VudDtcbiAgICB0aGlzLl9oYW5kbGVEZWNyZWFzZVRvdGFsT2xkUHJpY2UgPSBoYW5kbGVEZWNyZWFzZVRvdGFsT2xkUHJpY2U7XG4gICAgdGhpcy5faGFuZGxlSW5jcmVhc2VUb3RhbE9sZFByaWNlID0gaGFuZGxlSW5jcmVhc2VUb3RhbE9sZFByaWNlO1xuICAgIHRoaXMuX2hhbmRsZURlY3JlYXNlVG90YWxEaXNjb3VudCA9IGhhbmRsZURlY3JlYXNlVG90YWxEaXNjb3VudDtcbiAgICB0aGlzLl9oYW5kbGVJbmNyZWFzZVRvdGFsRGlzY291bnQgPSBoYW5kbGVJbmNyZWFzZVRvdGFsRGlzY291bnQ7XG4gICAgdGhpcy5faGFuZGxlRGVjcmVhc2VDb3VudCA9IGhhbmRsZURlY3JlYXNlQ291bnQ7XG4gICAgdGhpcy5faGFuZGxlSW5jcmVhc2VDb3VudCA9IGhhbmRsZUluY3JlYXNlQ291bnQ7XG4gICAgdGhpcy5faGFuZGxlQ2hlY2tJbnB1dFByb2R1Y3RzID0gaGFuZGxlQ2hlY2tJbnB1dFByb2R1Y3RzO1xuICAgIHRoaXMuX2hhbmRsZURpc2FibGVJbnB1dEFsbFByb2R1Y3QgPSBoYW5kbGVEaXNhYmxlSW5wdXRBbGxQcm9kdWN0O1xuICAgIHRoaXMuX2hhbmRsZUVuYWJsZUlucHV0QWxsUHJvZHVjdCA9IGhhbmRsZUVuYWJsZUlucHV0QWxsUHJvZHVjdDtcbiAgICB0aGlzLl9oYWRsZVNldFByb2R1Y3RNaXNzaW5nID0gaGFuZGxlU2V0UHJvZHVjdE1pc3NpbmcsXG4gICAgdGhpcy5kZWxpdmVyeURhdGUgPSB0aGlzLl9kYXRhLmRlbGl2ZXJ5RGF0ZTtcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICB0aGlzLmltYWdlID0gZGF0YS5pbWFnZTtcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICB9XG5cbiAgX3JlbmRlck9sZFN1bSA9ICh7IHN1bSwgZGlzY291bnQsIGRpc2NvdW50VXNlciB9KSA9PiB7XG4gICAgdGhpcy5fcHJvZHVjdFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fcHJvZHVjdFNldHRpbmcucHJvZHVjdE9sZFByaWNlU2VsZWN0b3IpXG4gICAgICAudGV4dENvbnRlbnQgPSBgJHtzdW0udG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyQpL2csICckMSAnKX0g0YHQvtC8YDtcblxuICAgIGlmIChkaXNjb3VudCkge1xuICAgICAgdGhpcy5fcHJvZHVjdFxuICAgICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0RGlzY291bnRTZWxlY3RvcilcbiAgICAgICAgLnRleHRDb250ZW50ID0gYNCh0LrQuNC00LrQsCAke3RoaXMuX2RhdGEucHJpY2VJbmZvLmRpc2NvdW50fSVgO1xuXG4gICAgICB0aGlzLl9wcm9kdWN0XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX3Byb2R1Y3RTZXR0aW5nLnByb2R1Y3REaXNjb3VudFN1bVNlbGVjdG9yKVxuICAgICAgICAudGV4dENvbnRlbnQgPSBgLSR7ZGlzY291bnR9INGB0L7QvGA7XG4gICAgfVxuXG4gICAgaWYgKGRpc2NvdW50VXNlcikge1xuICAgICAgdGhpcy5fcHJvZHVjdFxuICAgICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0UGVyc29uRGlzY291bnRTZWxlY3RvcilcbiAgICAgICAgLnRleHRDb250ZW50ID0gYNCh0LrQuNC00LrQsCDQv9C+0LrRg9C/0LDRgtC10LvRjyAke3RoaXMuX2RhdGEucHJpY2VJbmZvLmRpc2NvdW50VXNlcn0lYDtcblxuICAgICAgdGhpcy5fcHJvZHVjdFxuICAgICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0UGVyc29uRGlzY291bnRTdW1TZWxlY3RvcilcbiAgICAgICAgLnRleHRDb250ZW50ID0gYC0ke2Rpc2NvdW50VXNlcn0g0YHQvtC8YDtcbiAgICB9XG4gIH1cblxuICBfY2FsY3VsYXRlT2xkU3VtID0gKHF1YW50aXR5KSA9PiB7XG4gICAgY29uc3Qgc3VtID0gdGhpcy5fb2xkUHJpY2UgKiBxdWFudGl0eTtcbiAgICBsZXQgZGlzY291bnQgPSBudWxsO1xuICAgIGxldCBkaXNjb3VudFVzZXIgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuX2RhdGEucHJpY2VJbmZvLmRpc2NvdW50KSB7XG4gICAgICBkaXNjb3VudCA9ICgoKHRoaXMuX29sZFByaWNlICogcXVhbnRpdHkpICogdGhpcy5fZGF0YS5wcmljZUluZm8uZGlzY291bnQpIC8gMTAwKVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSskKS9nLCAnJDEgJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RhdGEucHJpY2VJbmZvLmRpc2NvdW50VXNlcikge1xuICAgICAgZGlzY291bnRVc2VyID0gKCgodGhpcy5fb2xkUHJpY2UgKiBxdWFudGl0eSkgKiB0aGlzLl9kYXRhLnByaWNlSW5mby5kaXNjb3VudFVzZXIpIC8gMTAwKVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSskKS9nLCAnJDEgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VtLCBkaXNjb3VudCwgZGlzY291bnRVc2VyIH1cbiAgfVxuXG4gIF9yZW5kZXJTdW0gPSAodmFsdWUpID0+IHtcbiAgICB2YWx1ZS50b1N0cmluZygpLmxlbmd0aCA+IDVcbiAgICAgID8gdGhpcy5fbmV3UHJpY2VFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fcHJvZHVjdFNldHRpbmcucHJvZHVjdE5ld1ByaWNlU21hbGxUZXh0Q2xhc3MpXG4gICAgICA6IHRoaXMuX25ld1ByaWNlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3Byb2R1Y3RTZXR0aW5nLnByb2R1Y3ROZXdQcmljZVNtYWxsVGV4dENsYXNzKVxuXG4gICAgdGhpcy5fbmV3UHJpY2VFbGVtZW50LnRleHRDb250ZW50ID0gYCR7dmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyQpL2csICckMSAnKX1gO1xuICB9XG5cbiAgX2NhbGN1bGF0ZVN1bSA9IChxdWFudGl0eSkgPT4ge1xuICAgIHRoaXMuX3N1bURpc2NvdW50ID0gKHRoaXMuX29sZFByaWNlKVxuICAgICAgKiAodGhpcy5fZGF0YS5wcmljZUluZm8uZGlzY291bnRcbiAgICAgICsgdGhpcy5fZGF0YS5wcmljZUluZm8uZGlzY291bnRVc2VyKSAvIDEwMDtcblxuICAgIHJldHVybiAoKHRoaXMuX29sZFByaWNlIC0gdGhpcy5fc3VtRGlzY291bnQpICogcXVhbnRpdHkpXG4gIH1cblxuICBfcmVuZGVyQ291bnRlciA9ICh2YWx1ZSkgPT4ge1xuICAgIHRoaXMuX3Byb2R1Y3RDb3VudC52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgX2luY3JlYXNlQ291bnRlciA9ICgpID0+IHtcbiAgICB0aGlzLl9wcm9kdWN0Q291bnRQbHVzQnRuLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fcHJvZHVjdFNldHRpbmcucHJvZHVjdENvdW50QnRuVHlwZURpc2FibGVkQ2xhc3MpO1xuXG4gICAgaWYgKHRoaXMuX3Byb2R1Y3RDb3VudC52YWx1ZSA+PSAodGhpcy5fZGF0YS5hdmFpbGFibGUgLSAxKSkge1xuICAgICAgdGhpcy5fcHJvZHVjdENvdW50UGx1c0J0bi5jbGFzc0xpc3QuYWRkKHRoaXMuX3Byb2R1Y3RTZXR0aW5nLnByb2R1Y3RDb3VudEJ0blR5cGVEaXNhYmxlZENsYXNzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wcm9kdWN0Q291bnRNaW51c0J0bi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3Byb2R1Y3RTZXR0aW5nLnByb2R1Y3RDb3VudEJ0blR5cGVEaXNhYmxlZENsYXNzKTtcbiAgICBpZiAodGhpcy5fcHJvZHVjdENvdW50LnZhbHVlID49IHRoaXMuX2RhdGEuYXZhaWxhYmxlKSByZXR1cm5cblxuICAgIHRoaXMuX2hhbmRsZUNoYW5nZUNvdW50UHJvZHVjdEluQXJyYXkodGhpcy5pZCwgcGFyc2VJbnQodGhpcy5fcHJvZHVjdENvdW50LnZhbHVlKSArIDEpXG5cbiAgICBpZiAodGhpcy5pc0NoZWNrZWQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZUluY3JlYXNlQWNjb3JkaW9uUHJpY2UodGhpcy5fb2xkUHJpY2UgLSB0aGlzLl9zdW1EaXNjb3VudCk7XG4gICAgICB0aGlzLl9yZW5kZXJTdW0odGhpcy5fY2FsY3VsYXRlU3VtKHBhcnNlSW50KHRoaXMuX3Byb2R1Y3RDb3VudC52YWx1ZSkgKyAxKSk7XG4gICAgICB0aGlzLl9yZW5kZXJPbGRTdW0odGhpcy5fY2FsY3VsYXRlT2xkU3VtKHBhcnNlSW50KHRoaXMuX3Byb2R1Y3RDb3VudC52YWx1ZSkgKyAxKSk7XG4gICAgICB0aGlzLl9yZW5kZXJDb3VudGVyKHBhcnNlSW50KHRoaXMuX3Byb2R1Y3RDb3VudC52YWx1ZSkgKyAxKTtcbiAgICAgIHRoaXMuX2hhbmRsZUluY3JlYXNlVG90YWxQcmljZSh0aGlzLl9vbGRQcmljZSAtIHRoaXMuX3N1bURpc2NvdW50KTtcbiAgICAgIHRoaXMuX2hhbmRsZUluY3JlYXNlVG90YWxDb3VudCgxKTtcbiAgICAgIHRoaXMuX2hhbmRsZUluY3JlYXNlVG90YWxPbGRQcmljZSh0aGlzLl9vbGRQcmljZSk7XG4gICAgICB0aGlzLl9oYW5kbGVJbmNyZWFzZVRvdGFsRGlzY291bnQodGhpcy5fc3VtRGlzY291bnQgKiB0aGlzLl9wcm9kdWN0Q291bnQudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIF9kZWNyZWFzZUNvdW50ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5fcHJvZHVjdENvdW50UGx1c0J0bi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3Byb2R1Y3RTZXR0aW5nLnByb2R1Y3RDb3VudEJ0blR5cGVEaXNhYmxlZENsYXNzKTtcblxuICAgIGlmICh0aGlzLl9wcm9kdWN0Q291bnQudmFsdWUgPD0gMikge1xuICAgICAgdGhpcy5fcHJvZHVjdENvdW50TWludXNCdG4uY2xhc3NMaXN0LmFkZCh0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0Q291bnRCdG5UeXBlRGlzYWJsZWRDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Byb2R1Y3RDb3VudC52YWx1ZSA8PSAxKSByZXR1cm5cblxuICAgIHRoaXMuX2hhbmRsZUNoYW5nZUNvdW50UHJvZHVjdEluQXJyYXkodGhpcy5pZCwgcGFyc2VJbnQodGhpcy5fcHJvZHVjdENvdW50LnZhbHVlKSAtIDEpXG5cbiAgICBpZiAodGhpcy5pc0NoZWNrZWQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZUluY3JlYXNlQWNjb3JkaW9uUHJpY2UoLSh0aGlzLl9vbGRQcmljZSAtIHRoaXMuX3N1bURpc2NvdW50KSk7XG4gICAgICB0aGlzLl9yZW5kZXJTdW0odGhpcy5fY2FsY3VsYXRlU3VtKHBhcnNlSW50KHRoaXMuX3Byb2R1Y3RDb3VudC52YWx1ZSkgLSAxKSk7XG4gICAgICB0aGlzLl9yZW5kZXJPbGRTdW0odGhpcy5fY2FsY3VsYXRlT2xkU3VtKHBhcnNlSW50KHRoaXMuX3Byb2R1Y3RDb3VudC52YWx1ZSkgLSAxKSk7XG4gICAgICB0aGlzLl9yZW5kZXJDb3VudGVyKHBhcnNlSW50KHRoaXMuX3Byb2R1Y3RDb3VudC52YWx1ZSkgLSAxKTtcbiAgICAgIHRoaXMuX2hhbmRsZURlY3JlYXNlVG90YWxQcmljZSh0aGlzLl9vbGRQcmljZSAtIHRoaXMuX3N1bURpc2NvdW50KTtcbiAgICAgIHRoaXMuX2hhbmRsZURlY3JlYXNlVG90YWxDb3VudCgxKTtcbiAgICAgIHRoaXMuX2hhbmRsZURlY3JlYXNlVG90YWxPbGRQcmljZSh0aGlzLl9vbGRQcmljZSk7XG4gICAgICB0aGlzLl9oYW5kbGVEZWNyZWFzZVRvdGFsRGlzY291bnQodGhpcy5fc3VtRGlzY291bnQgKiB0aGlzLl9wcm9kdWN0Q291bnQudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGVuYWJsZUlucHV0ID0gKCkgPT4ge1xuICAgIHRoaXMuX2hhbmRsZUFkZFByb2R1Y3QodGhpcy5fZGF0YSk7XG5cbiAgICB0aGlzLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy5fcHJvZHVjdElucHV0LmNoZWNrZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5faGFuZGxlSW5jcmVhc2VUb3RhbFByaWNlKCh0aGlzLl9vbGRQcmljZSAtIHRoaXMuX3N1bURpc2NvdW50KSAqIHRoaXMuX3Byb2R1Y3RDb3VudC52YWx1ZSk7XG4gICAgdGhpcy5faGFuZGxlSW5jcmVhc2VUb3RhbENvdW50KHBhcnNlSW50KHRoaXMuX3Byb2R1Y3RDb3VudC52YWx1ZSkpO1xuICAgIHRoaXMuX2hhbmRsZUluY3JlYXNlVG90YWxPbGRQcmljZSh0aGlzLl9vbGRQcmljZSAqIHRoaXMuX3Byb2R1Y3RDb3VudC52YWx1ZSk7XG4gICAgdGhpcy5faGFuZGxlSW5jcmVhc2VUb3RhbERpc2NvdW50KHRoaXMuX3N1bURpc2NvdW50ICogdGhpcy5fcHJvZHVjdENvdW50LnZhbHVlKTtcbiAgfVxuXG4gIGRpc2FibGVJbnB1dCA9ICgpID0+IHtcbiAgICB0aGlzLl9oYW5kbGVSZW1vdmVQcm9kdWN0KHRoaXMuaWQpO1xuXG4gICAgdGhpcy5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9wcm9kdWN0SW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5faGFuZGxlRGVjcmVhc2VUb3RhbFByaWNlKCh0aGlzLl9vbGRQcmljZSAtIHRoaXMuX3N1bURpc2NvdW50KSAqIHRoaXMuX3Byb2R1Y3RDb3VudC52YWx1ZSk7XG4gICAgdGhpcy5faGFuZGxlRGVjcmVhc2VUb3RhbENvdW50KHBhcnNlSW50KHRoaXMuX3Byb2R1Y3RDb3VudC52YWx1ZSkpO1xuICAgIHRoaXMuX2hhbmRsZURlY3JlYXNlVG90YWxPbGRQcmljZSh0aGlzLl9vbGRQcmljZSAqIHRoaXMuX3Byb2R1Y3RDb3VudC52YWx1ZSk7XG4gICAgdGhpcy5faGFuZGxlRGVjcmVhc2VUb3RhbERpc2NvdW50KHRoaXMuX3N1bURpc2NvdW50ICogdGhpcy5fcHJvZHVjdENvdW50LnZhbHVlKTtcbiAgfVxuXG4gIF9yZW1vdmVQcm9kdWN0ID0gKCkgPT4ge1xuICAgIHRoaXMuX2hhbmRsZVJlbW92ZVByb2R1Y3QodGhpcy5pZCk7XG5cbiAgICAvLyBpZiBwcm9kdWN0IG5vdCBzZWxlY3RlZCwgZG8gbm90IGRlY3JlYXNlIHRvdGFsIHByaWNlXG4gICAgaWYgKHRoaXMuaXNDaGVja2VkKSB7XG4gICAgICB0aGlzLl9oYW5kbGVEZWNyZWFzZVRvdGFsUHJpY2UoKHRoaXMuX29sZFByaWNlIC0gdGhpcy5fc3VtRGlzY291bnQpICogdGhpcy5fcHJvZHVjdENvdW50LnZhbHVlKTtcbiAgICAgIHRoaXMuX2hhbmRsZURlY3JlYXNlVG90YWxDb3VudCh0aGlzLl9wcm9kdWN0Q291bnQudmFsdWUpO1xuICAgICAgdGhpcy5faGFuZGxlRGVjcmVhc2VUb3RhbE9sZFByaWNlKHRoaXMuX29sZFByaWNlICogdGhpcy5fcHJvZHVjdENvdW50LnZhbHVlKTtcbiAgICAgIHRoaXMuX2hhbmRsZURlY3JlYXNlVG90YWxEaXNjb3VudCh0aGlzLl9zdW1EaXNjb3VudCAqIHRoaXMuX3Byb2R1Y3RDb3VudC52YWx1ZSk7XG4gICAgfTtcblxuICAgIHRoaXMuX2hhbmRsZUluY3JlYXNlQ291bnQoLTEpO1xuICAgIHRoaXMuX2hhbmRsZURlY3JlYXNlQWNjb3JkaW9uQ291bnRlcigpO1xuXG4gICAgLy8gY2hlY2sgYWxsIGlucHV0cyBpZiBkZWxldGUgZGlzYWJsZWQgcHJvZHVjdFxuICAgIHRoaXMuX2hhbmRsZUNoZWNrSW5wdXRQcm9kdWN0cygpXG4gICAgICA/IHRoaXMuX2hhbmRsZUVuYWJsZUlucHV0QWxsUHJvZHVjdCgpXG4gICAgICA6IHRoaXMuX2hhbmRsZURpc2FibGVJbnB1dEFsbFByb2R1Y3QoKVxuXG4gICAgdGhpcy5fcHJvZHVjdC5yZW1vdmUoKTtcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVyRm9yUHJvZHVjdE1pc3NpbmcgPSAoKSA9PiB7XG4gICAgdGhpcy5fcHJvZHVjdE1pc3NpbmdEZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9wcm9kdWN0TWlzc2luZy5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3Byb2R1Y3RNaXNzaW5nRmF2b3JpdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9wcm9kdWN0RmF2b3JpdGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0SWNvbkFjdGl2ZUNsYXNzKTtcbiAgICAgIHRoaXMuX3Byb2R1Y3RNaXNzaW5nRmF2b3JpdGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0SWNvbkFjdGl2ZUNsYXNzKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICB0aGlzLl9wcm9kdWN0SW5wdXREZWNvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0NoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5lbmFibGVJbnB1dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlSW5wdXQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX3Byb2R1Y3RDb3VudFBsdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9pbmNyZWFzZUNvdW50ZXIoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3Byb2R1Y3RDb3VudE1pbnVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5fZGVjcmVhc2VDb3VudGVyKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9wcm9kdWN0RmF2b3JpdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9wcm9kdWN0RmF2b3JpdGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0SWNvbkFjdGl2ZUNsYXNzKTtcbiAgICAgIHRoaXMuX3Byb2R1Y3RNaXNzaW5nRmF2b3JpdGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0SWNvbkFjdGl2ZUNsYXNzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3Byb2R1Y3REZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9yZW1vdmVQcm9kdWN0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX2dldFRlbXBsYXRlID0gKHRlbXBsYXRlU2VsZWN0b3IsIGl0ZW1TZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3RFbGVtZW50ID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRlbXBsYXRlU2VsZWN0b3IpXG4gICAgICAuY29udGVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoaXRlbVNlbGVjdG9yKVxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIHJldHVybiBwcm9kdWN0RWxlbWVudDtcbiAgfVxuXG4gIF9nZW5lcmF0ZVByb2R1Y3RNaXNzaW5nID0gKCkgPT4ge1xuICAgIHRoaXMuX3Byb2R1Y3RNaXNzaW5nID0gdGhpcy5fZ2V0VGVtcGxhdGUoXG4gICAgICB0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0TWlzc2luZ1RlbXBsYXRlU2VsZWN0b3IsXG4gICAgICB0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0TWlzc2luZ1NlbGVjdG9yLFxuICAgICk7XG5cbiAgICB0aGlzLl9wcm9kdWN0TWlzc2luZy5xdWVyeVNlbGVjdG9yKHRoaXMuX3Byb2R1Y3RTZXR0aW5nLnByb2R1Y3RQcmV2aWV3U2VsZWN0b3IpLnNyYyA9IHRoaXMuX2RhdGEuaW1hZ2U7XG4gICAgdGhpcy5fcHJvZHVjdE1pc3NpbmcucXVlcnlTZWxlY3Rvcih0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0VGl0bGVTZWxlY3RvcikudGV4dENvbnRlbnQgPSB0aGlzLl9kYXRhLm5hbWUudHJpbSgpO1xuICAgIHRoaXMuX3Byb2R1Y3RNaXNzaW5nLnF1ZXJ5U2VsZWN0b3IodGhpcy5fcHJvZHVjdFNldHRpbmcucHJvZHVjdFByZXZpZXdTZWxlY3RvcikuYWx0ID0gdGhpcy5fZGF0YS5uYW1lLnRyaW0oKTtcblxuICAgIGlmICh0aGlzLl9kYXRhLmNvbG9yIHx8IHRoaXMuX2RhdGEuc2l6ZSkge1xuICAgICAgaWYgKHRoaXMuX2RhdGEuY29sb3IpIHtcbiAgICAgICAgdGhpcy5fcHJvZHVjdE1pc3NpbmcuXG4gICAgICAgICAgcXVlcnlTZWxlY3Rvcih0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0Q29sb3JTZWxlY3RvcilcbiAgICAgICAgICAudGV4dENvbnRlbnQgPSBg0KbQstC10YI6ICR7dGhpcy5fZGF0YS5jb2xvci50cmltKCl9YDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2RhdGEuc2l6ZSkge1xuICAgICAgICB0aGlzLl9wcm9kdWN0TWlzc2luZy5cbiAgICAgICAgICBxdWVyeVNlbGVjdG9yKHRoaXMuX3Byb2R1Y3RTZXR0aW5nLnByb2R1Y3RTaXplU2VsZWN0b3IpXG4gICAgICAgICAgLnRleHRDb250ZW50ID0gYCR7dGhpcy5fZGF0YS5zaXplfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9wcm9kdWN0TWlzc2luZy5cbiAgICAgICAgICBxdWVyeVNlbGVjdG9yKHRoaXMuX3Byb2R1Y3RTZXR0aW5nLnByb2R1Y3RQcm9wZXJ0eVdyYXBwZXJTZWxlY3RvcilcbiAgICAgICAgICAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcHJvZHVjdE1pc3NpbmcuXG4gICAgICAgIHF1ZXJ5U2VsZWN0b3IodGhpcy5fcHJvZHVjdFNldHRpbmcucHJvZHVjdEl0ZW1Qcm9wZXJ0aWVzU2VsZWN0b3IpXG4gICAgICAgIC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIHRoaXMuX3Byb2R1Y3RNaXNzaW5nRmF2b3JpdGVCdG4gPSB0aGlzLl9wcm9kdWN0TWlzc2luZy5xdWVyeVNlbGVjdG9yKHRoaXMuX3Byb2R1Y3RTZXR0aW5nLnByb2R1Y3RGYXZvdGl0ZUJ0blNlbGVjdG9yKTtcbiAgICB0aGlzLl9wcm9kdWN0TWlzc2luZ0RlbGV0ZUJ0biA9IHRoaXMuX3Byb2R1Y3RNaXNzaW5nLnF1ZXJ5U2VsZWN0b3IodGhpcy5fcHJvZHVjdFNldHRpbmcucHJvZHVjdERlbGV0ZUJ0blNlbGVjdG9yKTtcblxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJGb3JQcm9kdWN0TWlzc2luZygpO1xuXG4gICAgcmV0dXJuIHRoaXMuX3Byb2R1Y3RNaXNzaW5nO1xuICB9XG5cbiAgZ2VuZXJhdGVQcm9kdWN0ID0gKCkgPT4ge1xuICAgIHRoaXMuX3Byb2R1Y3QgPSB0aGlzLl9nZXRUZW1wbGF0ZShcbiAgICAgIHRoaXMuX3Byb2R1Y3RTZXR0aW5nLnByb2R1Y3RUZW1wbGF0ZVNlbGVjdG9yLFxuICAgICAgdGhpcy5fcHJvZHVjdFNldHRpbmcucHJvZHVjdFNlbGVjdG9yXG4gICAgKTtcblxuICAgIHRoaXMuX3Byb2R1Y3RJbnB1dCA9IHRoaXMuX3Byb2R1Y3QucXVlcnlTZWxlY3Rvcih0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0SW5wdXRTZWxlY29yKTtcbiAgICB0aGlzLl9wcm9kdWN0SW5wdXREZWNvciA9IHRoaXMuX3Byb2R1Y3QucXVlcnlTZWxlY3Rvcih0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0SW5wdXREZWNvclNlbGVjb3IpO1xuXG4gICAgdGhpcy5fcHJvZHVjdC5cbiAgICAgIHF1ZXJ5U2VsZWN0b3IodGhpcy5fcHJvZHVjdFNldHRpbmcucHJvZHVjdFByZXZpZXdTZWxlY3RvcilcbiAgICAgIC5zcmMgPSB0aGlzLl9kYXRhLmltYWdlO1xuICAgIHRoaXMuX3Byb2R1Y3QuXG4gICAgICBxdWVyeVNlbGVjdG9yKHRoaXMuX3Byb2R1Y3RTZXR0aW5nLnByb2R1Y3RQcmV2aWV3U2VsZWN0b3IpXG4gICAgICAuYWx0ID0gdGhpcy5fZGF0YS5uYW1lLnRyaW0oKTtcbiAgICB0aGlzLl9wcm9kdWN0LlxuICAgICAgcXVlcnlTZWxlY3Rvcih0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0VGl0bGVTZWxlY3RvcilcbiAgICAgIC50ZXh0Q29udGVudCA9IHRoaXMuX2RhdGEubmFtZS50cmltKCk7XG5cbiAgICBpZiAodGhpcy5fZGF0YS5jb2xvciB8fCB0aGlzLl9kYXRhLnNpemUpIHtcbiAgICAgIGlmICh0aGlzLl9kYXRhLmNvbG9yKSB7XG4gICAgICAgIHRoaXMuX3Byb2R1Y3QuXG4gICAgICAgICAgcXVlcnlTZWxlY3Rvcih0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0Q29sb3JTZWxlY3RvcilcbiAgICAgICAgICAudGV4dENvbnRlbnQgPSBg0KbQstC10YI6ICR7dGhpcy5fZGF0YS5jb2xvci50cmltKCl9YDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2RhdGEuc2l6ZSkge1xuICAgICAgICB0aGlzLl9wcm9kdWN0LlxuICAgICAgICAgIHF1ZXJ5U2VsZWN0b3IodGhpcy5fcHJvZHVjdFNldHRpbmcucHJvZHVjdFNpemVTZWxlY3RvcilcbiAgICAgICAgICAudGV4dENvbnRlbnQgPSBgJHt0aGlzLl9kYXRhLnNpemV9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Byb2R1Y3QuXG4gICAgICAgICAgcXVlcnlTZWxlY3Rvcih0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0UHJvcGVydHlXcmFwcGVyU2VsZWN0b3IpXG4gICAgICAgICAgLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Byb2R1Y3QuXG4gICAgICAgIHF1ZXJ5U2VsZWN0b3IodGhpcy5fcHJvZHVjdFNldHRpbmcucHJvZHVjdEl0ZW1Qcm9wZXJ0aWVzU2VsZWN0b3IpXG4gICAgICAgIC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIHRoaXMuX3Byb2R1Y3RcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX3Byb2R1Y3RTZXR0aW5nLnByb2R1Y3RTZWxsZXJTZWxlY3RvcilcbiAgICAgIC50ZXh0Q29udGVudCA9IHRoaXMuX2RhdGEuc2VsbGVyO1xuICAgIHRoaXMuX3Byb2R1Y3RcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX3Byb2R1Y3RTZXR0aW5nLnByb2R1Y3RPcmdhbml6YXRpb25OYW1lU2VsZWN0b3IpXG4gICAgICAudGV4dENvbnRlbnQgPSB0aGlzLl9kYXRhLm9yZ2FuaXphdGlvbjtcbiAgICB0aGlzLl9wcm9kdWN0XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0T3JnTmFtZVNlbGVjdG9yKVxuICAgICAgLnRleHRDb250ZW50ID0gdGhpcy5fZGF0YS5vcmdhbml6YXRpb25JbmZvLm9yZ05hbWU7XG4gICAgdGhpcy5fcHJvZHVjdFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fcHJvZHVjdFNldHRpbmcucHJvZHVjdE9yZ2FuaXphdGlvblJlcXVpc2l0ZXNTZWxlY3RvcilcbiAgICAgIC50ZXh0Q29udGVudCA9IHRoaXMuX2RhdGEub3JnYW5pemF0aW9uSW5mby5yZXF1aXNpdGVzO1xuICAgIHRoaXMuX3Byb2R1Y3RcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX3Byb2R1Y3RTZXR0aW5nLnByb2R1Y3RPcmdhbml6YXRpb25PcmdBZGRyZXNzU2VsZWN0b3IpXG4gICAgICAudGV4dENvbnRlbnQgPSB0aGlzLl9kYXRhLm9yZ2FuaXphdGlvbkluZm8ub3JnQWRkcmVzcztcblxuICAgIHRoaXMuX3Byb2R1Y3RDb3VudCA9IHRoaXMuX3Byb2R1Y3RcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX3Byb2R1Y3RTZXR0aW5nLnByb2R1Y3RDb3VudFNlbGVjdG9yKTtcbiAgICB0aGlzLl9wcm9kdWN0Q291bnQudmFsdWUgPSB0aGlzLl9kYXRhLnF1YW50aXR5O1xuXG4gICAgdGhpcy5fbmV3UHJpY2VFbGVtZW50ID0gdGhpcy5fcHJvZHVjdFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fcHJvZHVjdFNldHRpbmcucHJvZHVjdE5ld1ByaWNlU2VsZWN0b3IpXG5cbiAgICB0aGlzLl9wcm9kdWN0RmF2b3JpdGVCdG4gPSB0aGlzLl9wcm9kdWN0LnF1ZXJ5U2VsZWN0b3IodGhpcy5fcHJvZHVjdFNldHRpbmcucHJvZHVjdEZhdm90aXRlQnRuU2VsZWN0b3IpO1xuICAgIHRoaXMuX3Byb2R1Y3REZWxldGVCdG4gPSB0aGlzLl9wcm9kdWN0LnF1ZXJ5U2VsZWN0b3IodGhpcy5fcHJvZHVjdFNldHRpbmcucHJvZHVjdERlbGV0ZUJ0blNlbGVjdG9yKTtcbiAgICB0aGlzLl9wcm9kdWN0Q291bnRNaW51c0J0biA9IHRoaXMuX3Byb2R1Y3QucXVlcnlTZWxlY3Rvcih0aGlzLl9wcm9kdWN0U2V0dGluZy5wcm9kdWN0Q291bnRNaW51c0J0blNlbGVjdG9yKTtcbiAgICB0aGlzLl9wcm9kdWN0Q291bnRQbHVzQnRuID0gdGhpcy5fcHJvZHVjdC5xdWVyeVNlbGVjdG9yKHRoaXMuX3Byb2R1Y3RTZXR0aW5nLnByb2R1Y3RDb3VudFBsdXNCdG5TZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9yZW5kZXJTdW0odGhpcy5fY2FsY3VsYXRlU3VtKHRoaXMuX2RhdGEucXVhbnRpdHkpKVxuICAgIHRoaXMuX3JlbmRlck9sZFN1bSh0aGlzLl9jYWxjdWxhdGVPbGRTdW0odGhpcy5fZGF0YS5xdWFudGl0eSkpO1xuXG4gICAgaWYgKHRoaXMuX2RhdGEuYXZhaWxhYmxlIDw9IDIpIHtcbiAgICAgIHRoaXMuX3Byb2R1Y3RcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fcHJvZHVjdFNldHRpbmcucHJvZHVjdEF2YWlsYWJsZVNlbGVjdG9yKVxuICAgICAgICAudGV4dENvbnRlbnQgPSBg0J7RgdGC0LDQu9C+0YHRjCAke3RoaXMuX2RhdGEuYXZhaWxhYmxlfSDRiNGCLmA7XG4gICAgfVxuXG4gICAgaWYgKEluZmluaXR5KSB7IC8vIGNvbmRpdGlvbiBpZiB0aGVyZSBpcyBubyBwcm9kdWN0XG4gICAgICB0aGlzLl9oYWRsZVNldFByb2R1Y3RNaXNzaW5nKHRoaXMuX2dlbmVyYXRlUHJvZHVjdE1pc3NpbmcoKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9oYW5kbGVJbmNyZWFzZUFjY29yZGlvbkNvdW50ZXIoKTtcbiAgICB0aGlzLl9oYW5kbGVJbmNyZWFzZUNvdW50KDEpO1xuICAgIHRoaXMuX2hhbmRsZUluY3JlYXNlQWNjb3JkaW9uUHJpY2UoKHRoaXMuX29sZFByaWNlIC0gdGhpcy5fc3VtRGlzY291bnQpICogdGhpcy5fZGF0YS5xdWFudGl0eSk7XG5cbiAgICByZXR1cm4gdGhpcy5fcHJvZHVjdDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgZGF0YSwgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbXMgPSAoKSA9PiB7XG4gICAgdGhpcy5fY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgc2V0SXRlbSA9IChlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XG4gIH1cblxuICByZW5kZXJJdGVtcyA9ICgpID0+IHtcbiAgICB0aGlzLl9kYXRhLnJldmVyc2UoKS5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5fcmVuZGVyZXIoaXRlbSkpO1xuICB9XG59XG4iLCJpbXBvcnQgcHJvZHVjdEljb25TaG9ydCBmcm9tICcuLi9pbWcvaXRlbS0wMS5qcGcnXG5pbXBvcnQgcHJvZHVjdEljb25DYXNlIGZyb20gJy4uL2ltZy9pdGVtLTAyLmpwZydcbmltcG9ydCBwcm9kdWN0SWNvblBlbmNpbHMgZnJvbSAnLi4vaW1nL2l0ZW0tMDMuanBnJ1xuaW1wb3J0IGNhcmRJY29uTWlyIGZyb20gJy4uL2ltZy9pY29ucy9pY29uLWNhcmQtbWlyLnN2ZydcbmltcG9ydCBjYXJkSWNvblZpc2EgZnJvbSAnLi4vaW1nL2ljb25zL2ljb24tY2FyZC12aXNhLnN2ZydcbmltcG9ydCBjYXJkSWNvbk1hc3RlckNhcmQgZnJvbSAnLi4vaW1nL2ljb25zL2ljb24tY2FyZC1tYXN0ZXJjYXJkLnN2ZydcbmltcG9ydCBjYXJkSWNvbk1hZXRybyBmcm9tICcuLi9pbWcvaWNvbnMvaWNvbi1jYXJkLW1hZXRyby5zdmcnXG5cbmV4cG9ydFxuY29uc3QgdXNlckRhdGFFeGFtcGxlID0ge1xuICBkZWxldmVyeToge1xuICAgIHBpY2t1cDogW1xuICAgICAge1xuICAgICAgICBhZGRyZXNzOiAn0JHQuNGI0LrQtdC6LCDRg9C70LjRhtCwINCi0LDQsdGL0YjQsNC70LjQtdCy0LAsIDU3JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFkZHJlc3M6ICfQkdC40YjQutC10LosINGD0LvQuNGG0LAg0JbRg9C60LXQtdCy0LAt0J/Rg9C00L7QstC60LjQvdCwLCA3Ny8xJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFkZHJlc3M6ICfQkdC40YjQutC10LosINC80LjQutGA0L7RgNCw0LnQvtC9INCU0LbQsNC7LCDRg9C70LjRhtCwINCQ0YXRg9C90LHQsNC10LLQsCDQmNGB0YssIDY3LzEnLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHBpY2t1cFBvaW50OiBbXG4gICAgICB7XG4gICAgICAgIGFkZHJlc3M6ICfQsy4g0JHQuNGI0LrQtdC6LCDQvNC40LrRgNC+0YDQsNC50L7QvSDQlNC20LDQuywg0YPQu9C40YbQsCDQkNGF0YPQvdCx0LDQtdCy0LAg0JjRgdGLLCDQtC4gNjcvMScsXG4gICAgICAgIHJhdGU6IG51bGwsXG4gICAgICAgIG9mZmljZUhvdXJzOiAn0JXQttC10LTQvdC10LLQvdC+INGBIDEwINC00L4gMjEgJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFkZHJlc3M6ICfQsy4g0JHQuNGI0LrQtdC6LCDQvNC40LrRgNC+0YDQsNC50L7QvSDQlNC20LDQuywg0YPQu9C40YbQsCDQkNGF0YPQvdCx0LDQtdCy0LAg0JjRgdGLLCDQtC4gMjInLFxuICAgICAgICByYXRlOiA0Ljk5LFxuICAgICAgICBvZmZpY2VIb3VyczogJ9CV0LbQtdC00L3QtdCy0L3QviDRgSAxMCDQtNC+IDIyICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhZGRyZXNzOiAn0LMuINCR0LjRiNC60LXQuiwg0YPQu9C40YbQsCDQotCw0LHRi9GI0LDQu9C40LXQstCwLCDQtC4gNTcnLFxuICAgICAgICByYXRlOiA0Ljg3LFxuICAgICAgICBvZmZpY2VIb3VyczogJ9CV0LbQtdC00L3QtdCy0L3QviDRgSA5INC00L4gMjEgJyxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuICBjYXJkczogW1xuICAgIHtcbiAgICAgIGNhcmROdW1iZXI6ICcxMjM0IDU24oCi4oCiIOKAouKAouKAouKAoiAxMjM0JyxcbiAgICAgIGNhcmREYXRlOiAnMDcvMzAnLFxuICAgICAgY2FyZFVybEljb246IGNhcmRJY29uTWlyLFxuICAgIH0sXG4gICAge1xuICAgICAgY2FyZE51bWJlcjogJzEyMzQgNTbigKLigKIg4oCi4oCi4oCi4oCiIDEyMzUnLFxuICAgICAgY2FyZERhdGU6ICcwMi8yOCcsXG4gICAgICBjYXJkVXJsSWNvbjogY2FyZEljb25WaXNhLFxuICAgIH0sXG4gICAge1xuICAgICAgY2FyZE51bWJlcjogJzEyMzQgNTbigKLigKIg4oCi4oCi4oCi4oCiIDEyMzYnLFxuICAgICAgY2FyZERhdGU6ICcwNS8yOScsXG4gICAgICBjYXJkVXJsSWNvbjogY2FyZEljb25NYXN0ZXJDYXJkLFxuICAgIH0sXG4gICAge1xuICAgICAgY2FyZE51bWJlcjogJzEyMzQgNTbigKLigKIg4oCi4oCi4oCi4oCiIDEyMzcnLFxuICAgICAgY2FyZERhdGU6ICcxMi8yNCcsXG4gICAgICBjYXJkVXJsSWNvbjogY2FyZEljb25NYWV0cm8sXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydFxuY29uc3QgdXNlck9yZGVyRXhhbXBsZSA9IFtcbiAge1xuICAgIGlkOiAxMjAwMSxcbiAgICBuYW1lOiAn0KTRg9GC0LHQvtC70LrQsCBVWmNvdHRvbiDQvNGD0LbRgdC60LDRjycsXG4gICAgaW1hZ2U6IHByb2R1Y3RJY29uU2hvcnQsXG4gICAgY29sb3I6ICfQsdC10LvRi9C5JyxcbiAgICBzaXplOiA1NixcbiAgICBzZWxsZXI6ICfQmtC+0LvQtdC00LjQvdC+IFdCJyxcbiAgICBvcmdhbml6YXRpb246ICdPT08g0JLQsNC50LvQtNCx0LXRgNGA0LjQtycsXG4gICAgb3JnYW5pemF0aW9uSW5mbzoge1xuICAgICAgb3JnTmFtZTogJ09PTyDCq9CS0LDQudC70LTQsdC10YDRgNC40LfCuycsXG4gICAgICByZXF1aXNpdGVzOiAn0J7Qk9Cg0J06IDUxNjc3NDYyMzMyMTAnLFxuICAgICAgb3JnQWRkcmVzczogJzEyOTMzNywg0JzQvtGB0LrQstCwLCDRg9C70LjRhtCwINCa0YDQsNGB0L3QsNGPINCh0L7RgdC90LAsIDIsINC60L7RgNC/0YPRgSAxLCDRgdGC0YAuIDEsINC/0L7QvNC10YnQtdC90LjQtSAyLCDQvtGE0LjRgSA1JyxcbiAgICB9LFxuICAgIHF1YW50aXR5OiAxLFxuICAgIGF2YWlsYWJsZTogMixcbiAgICBkZWxpdmVyeURhdGU6IFtcbiAgICAgIHtcbiAgICAgICAgMTogWycyMDIzLTAyLTA1JywgJzIwMjMtMDItMDYnXSxcbiAgICAgIH1cbiAgICBdLFxuICAgIHByaWNlSW5mbzoge1xuICAgICAgZGlzY291bnQ6IDMwLFxuICAgICAgZGlzY291bnRVc2VyOiAxMCxcbiAgICB9LFxuICAgIG9sZFByaWNlOiAzMzAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDEyMDAyLFxuICAgIG5hbWU6ICfQodC40LvQuNC60L7QvdC+0LLRi9C5INGH0LXRhdC+0Lsg0LrQsNGA0YLRhdC+0LvQtNC10YAgKNC+0YLQstC10YDRgdGC0LjRjykg0LTQu9GPINC60LDRgNGCLCDQv9GA0L7Qt9GA0LDRh9C90YvQuSDQutC10LnRgSDQsdCw0LzQv9C10YAg0L3QsCBBcHBsZSBpUGhvbmUgWFIsIE1vYmlTYWZlJyxcbiAgICBpbWFnZTogcHJvZHVjdEljb25DYXNlLFxuICAgIGNvbG9yOiAn0L/RgNC+0LfRgNCw0YfQvdGL0LknLFxuICAgIHNpemU6IG51bGwsXG4gICAgc2VsbGVyOiAn0JrQvtC70LXQtNC40L3QviBXQicsXG4gICAgb3JnYW5pemF0aW9uOiAnT09PINCc0LXQs9Cw0L/RgNC+0YTRgdGC0LjQu9GMJyxcbiAgICBvcmdhbml6YXRpb25JbmZvOiB7XG4gICAgICBvcmdOYW1lOiAnT09PIMKr0JzQldCT0JDQn9Cg0J7QpNCh0KLQmNCb0KzCuycsXG4gICAgICByZXF1aXNpdGVzOiAn0J7Qk9Cg0J06IDUxNjc3NDYyMzcxNDgnLFxuICAgICAgb3JnQWRkcmVzczogJzEyMDQ3Nywg0JzQvtGB0LrQstCwLCDRg9C70LjRhtCwINCX0LXQu9C10L3QsNGPINCh0L7RgdC90LAsIDIsINC60L7RgNC/0YPRgSAxLCDRgdGC0YAuIDEsINC/0L7QvNC10YnQtdC90LjQtcKgMiwg0L7RhNC40YHCoDQ3JyxcbiAgICB9LFxuICAgIHF1YW50aXR5OiAyMDAsXG4gICAgYXZhaWxhYmxlOiAxMDAwLFxuICAgIGRlbGl2ZXJ5RGF0ZTogW1xuICAgICAge1xuICAgICAgICAxODQ6IFsnMjAyMy0wMi0wNScsICcyMDIzLTAyLTA2J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICA4MTY6IFsnMjAyMy0wMi0wNycsICcyMDIzLTAyLTA4J10sXG4gICAgICB9XG4gICAgXSxcbiAgICBwcmljZUluZm86IHtcbiAgICAgIGRpc2NvdW50OiAxMixcbiAgICAgIGRpc2NvdW50VXNlcjogMTAsXG4gICAgfSxcbiAgICBvbGRQcmljZTogMTMyMDAsXG4gIH0sXG4gIHtcbiAgICBpZDogMTIwMDMsXG4gICAgbmFtZTogJ9Ca0LDRgNCw0L3QtNCw0YjQuCDRhtCy0LXRgtC90YvQtSBGYWJlci1DYXN0ZWxsIFwi0JfQsNC80L7QulwiLCDQvdCw0LHQvtGAIDI0INGG0LLQtdGC0LAsINC30LDRgtC+0YfQtdC90L3Ri9C1LCDRiNC10YHRgtC40LPRgNCw0L3QvdGL0LUsIEZhYmVyLUNhc3RlbGwnLFxuICAgIGltYWdlOiBwcm9kdWN0SWNvblBlbmNpbHMsXG4gICAgY29sb3I6IG51bGwsXG4gICAgc2l6ZTogbnVsbCxcbiAgICBzZWxsZXI6ICfQmtC+0LvQtdC00LjQvdC+IFdCJyxcbiAgICBvcmdhbml6YXRpb246ICdPT08g0JLQsNC50LvQtNCx0LXRgNGA0LjQtycsXG4gICAgb3JnYW5pemF0aW9uSW5mbzoge1xuICAgICAgb3JnTmFtZTogJ09PTyDCq9CS0LDQudC70LTQsdC10YDRgNC40LfCuycsXG4gICAgICByZXF1aXNpdGVzOiAn0J7Qk9Cg0J06IDUxNjc3NDYyMzU0ODcnLFxuICAgICAgb3JnQWRkcmVzczogJzEyOTMzNywg0JzQvtGB0LrQstCwLCDRg9C70LjRhtCwINCa0YDQsNGB0L3QsNGPINCh0L7RgdC90LAsIDIsINC60L7RgNC/0YPRgSAxLCDRgdGC0YAuIDEsINC/0L7QvNC10YnQtdC90LjQtcKgMiwg0L7RhNC40YHCoDE5JyxcbiAgICB9LFxuICAgIHF1YW50aXR5OiAyLFxuICAgIGF2YWlsYWJsZTogMixcbiAgICBkZWxpdmVyeURhdGU6IFtcbiAgICAgIHtcbiAgICAgICAgMjogWycyMDIzLTAyLTA1JywgJzIwMjMtMDItMDYnXSxcbiAgICAgIH1cbiAgICBdLFxuICAgIHByaWNlSW5mbzoge1xuICAgICAgZGlzY291bnQ6IG51bGwsXG4gICAgICBkaXNjb3VudFVzZXI6IDEwLFxuICAgIH0sXG4gICAgb2xkUHJpY2U6IDY5MCxcbiAgfSxcbl1cblxuZXhwb3J0XG5jb25zdCBwb3B1cFNlbGVjdG9ycyA9IHtcbiAgICAgIGNob29zZVBheTogJy5wb3B1cFtkYXRhLXR5cGU9XCJwb3B1cC1jaG9vc2UtcGF5XCJdJyxcbiAgICAgIGNob29zZUFkZHJlc3M6ICcucG9wdXBbZGF0YS10eXBlPVwicG9wdXAtY2hvb3NlLWFkZHJlc3NcIl0nLFxufTtcblxuZXhwb3J0XG5jb25zdCBiYXNrZXRTZXR0aW5nID0ge1xuICAgICAgYmFza2V0QWNjb3JkaW9uUHJvZHVjdENvdW50U2VsZWN0b3I6ICcuYWNjb3JkaW9uX19oaWRlLWluZm8taXRlbVtkYXRhLXR5cGU9XCJhY2NvcmRpb24tY291bnRcIl0nLFxuICAgICAgYmFza2V0QWNjb3JkaW9uUHJvZHVjdFByaWNlU2VsZWN0b3I6ICcuYWNjb3JkaW9uX19oaWRlLWluZm8taXRlbVtkYXRhLXR5cGU9XCJhY2NvcmRpb24tcHJpY2VcIl0nLFxuICAgICAgY2FyZEljb25TZWxlY3RvcjogJy5wYXlfX2ljb24nLFxuICAgICAgY2FyZE51bWJlclNlbGVjdG9yOiAnLnBheV9fbnVtYmVyJyxcbiAgICAgIGNhcmREYXRlU2VsZWN0b3I6ICcucGF5X19kYXRlJyxcbiAgICAgIHBpY2t1cFRlbXBsYXRlU2VsZWN0b3I6ICcjcGlja3VwLXBvaW50JyxcbiAgICAgIHBpY2t1cFR5cGVTZWxlY3RvcjogJy5kZWxpdmVyeV9fbGFiZWxbZGF0YS10eXBlPVwiZGVsaXZlcnktdHlwZVwiXScsXG4gICAgICBwaWNrdXBTaWRlYmFyVHlwZVNlbGVjdG9yOiAnLmJhc2tldC1vcmRlcl9fdGl0bGVbZGF0YS10eXBlPVwiZGVsaXZlcnktdHlwZVwiXScsXG4gICAgICBwaWNrdXBEYXRhU2VsZWN0b3I6ICcuZGVsaXZlcnlfX2RhdGEnLFxuICAgICAgcGlja3VwQWRkcmVzc1NlbGVjdG9yOiAnLmRlbGl2ZXJ5X19hZGRyZXNzJyxcbiAgICAgIHBpY2t1cFNpZGViYXJBZGRyZXNzU2VsZWN0b3I6ICcuYmFza2V0LW9yZGVyX19hZGRyZXNzJyxcbiAgICAgIHBpY2t1cFJhdGVTZWxlY3RvcjogJy5kZWxpdmVyeV9fcmF0ZScsXG4gICAgICBwaWNrdXBPZmZpY2VIb3Vyc1NlbGVjdG9yOiAnLmRlbGl2ZXJ5X19vZmZpY2UtaG91cnMnLFxuICAgICAgcGlja3VwRGF0YUhpZGVDbGFzczogJ2RlbGl2ZXJ5X19kYXRhX2hpZGUnLFxuICAgICAgcGlja3VwVHlwZVRleHQ6ICfQn9GD0L3QutGCINCy0YvQtNCw0YfQuCcsXG4gICAgICBwaWNrdXBQb2ludFR5cGVUZXh0OiAn0JrRg9GA0YzQtdGA0L7QvCcsXG4gICAgICBwaWNrdXBTaWRlYmFyVHlwZVRleHQ6ICfQlNC+0YHRgtCw0LLQutCwINCyINC/0YPQvdC60YIg0LLRi9C00LDRh9C4JyxcbiAgICAgIHBpY2t1cFBvaW50U2lkZWJhclR5cGVUZXh0OiAn0JTQvtGB0YLQsNCy0LrQsCDQutGD0YDRjNC10YDQvtC8JyxcbiAgICAgIHByb2R1Y3RMaXN0TWlzc2luZ0NvbnRhaW5lclNlbGVjdG9yOiAnI3Byb2R1Y3QtbGlzdC1taXNzaW5nJyxcbiAgICAgIGFjY29yZGlvbkNoZWNrYm94QWxsUHJvZHVjdFNlbGVjdG9yOiAnLnByb2R1Y3RfX2NoZWNrYm94W2RhdGEtdHlwZT1cImNoZWNrYm94LWFsbC1wcm9kdWN0XCJdJyxcbiAgICAgIGFjY29yZGlvbkNoZWNrYm94QWxsUHJvZHVjdERlY29yU2VsZWN0b3I6ICcucHJvZHVjdF9fY2hlY2tib3gtZGVjb3JbZGF0YS10eXBlPVwiY2hlY2tib3gtYWxsLXByb2R1Y3QtZGVjb3JcIl0nLFxuICAgICAgYmFza2V0VG90YWxQcmljZVNlbGVjdG9yOiAnI2Jhc2tldC10b3RhbC1wcmljZScsXG4gICAgICBiYXNrZXRUb3RhbENvdW50U2VsZWN0b3I6ICcjYmFza2V0LXRvdGFsLWNvdW50JyxcbiAgICAgIGJhc2tldFRvdGFsT2xkUHJpY2VTZWxlY3RvcjogJyNiYXNrZXQtdG90YWwtb2xkLXByaWNlJyxcbiAgICAgIGJhc2tldFRvdGFsRGlzY291bnRTZWxlY3RvcjogJyNiYXNrZXQtdG90YWwtZGlzY291bnQnLFxuICAgICAgYmFza2V0VG90YWxEZWxpdmVyeURhdGVTZWxlY3RvcjogJy5iYXNrZXQtb3JkZXJfX2RhdGVbZGF0YS10eXBlPVwiZGVsaXZlcnlfdG90YWwtZGF0ZVwiXScsXG4gICAgICBiYXNrZXREZWxpdmVyeURhdGVJdGVtTGlzdFNlbGVjdG9yOiAnLmRlbGl2ZXJ5X19pdGVtcycsXG4gICAgICBiYXNrZXRDaGVja2JveFBheW1lbnRUeXBlU2VsZWN0b3I6ICcuYmFza2V0LW9yZGVyX19jaGVja2JveFtkYXRhLXR5cGU9XCJjaGVja2JveC1zaWRlYmFyLXBheW1lbnQtdHlwZVwiXScsXG4gICAgICBiYXNrZXRDaGVja2JveFBheW1lbnRUeXBlRGVjb3JTZWxlY3RvcjogJy5iYXNrZXQtb3JkZXJfX2NoZWNrYm94LWRlY29yW2RhdGEtdHlwZT1cImNoZWNrYm94LXNpZGViYXItcGF5bWVudC10eXBlXCJdJyxcbiAgICAgIGJhc2tldFRvdGFsQnRuU3VibWl0U2VsZWN0b3I6ICcuYmFza2V0LW9yZGVyX19idG5bZGF0YS10eXBlPVwiYnRuLXNpZGViYXItdG90YWxcIl0nLFxuICAgICAgaGVhZGVySWNvbkNvdW50ZXJTZWxlY3RvcjogJy5oZWFkZXJfX2xpbmstY291bnRbZGF0YS10eXBlPVwiY291bnRlci1oZWFkZXJcIl0nLFxuICAgICAgbmF2YmFyTW9iaWxlSWNvbkNvdW50ZXJTZWxlY3RvcjogJy5uYXZiYXItbW9iaWxlX19pY29uLWNvdW50W2RhdGEtdHlwZT1cImNvdW50ZXItbW9iaWxlXCJdJyxcbiAgICAgIGJhc2tldE9yZGVyQnRuU21hbGxUZXh0Q2xhc3M6ICdiYXNrZXQtb3JkZXJfX2J0bl90eXBlX3NtYWxsJyxcbn1cblxuZXhwb3J0XG5jb25zdCBwcm9kdWN0U2V0dGluZyA9IHtcbiAgICAgIHByb2R1Y3RUZW1wbGF0ZVNlbGVjdG9yOiAnI3Byb2R1Y3QnLFxuICAgICAgcHJvZHVjdE1pc3NpbmdUZW1wbGF0ZVNlbGVjdG9yOiAnI3Byb2R1Y3QtbWlpc2luZycsXG4gICAgICBwcm9kdWN0U2VsZWN0b3I6ICcucHJvZHVjdC1pdGVtJyxcbiAgICAgIHByb2R1Y3RNaXNzaW5nU2VsZWN0b3I6ICcucHJvZHVjdC1pdGVtX3R5cGVfbWlzc2luZycsXG4gICAgICBwcm9kdWN0UHJldmlld1NlbGVjdG9yOiAnLnByb2R1Y3QtaXRlbV9faW1nJyxcbiAgICAgIHByb2R1Y3RUaXRsZVNlbGVjdG9yOiAnLnByb2R1Y3QtaXRlbV9fdGl0bGUnLFxuICAgICAgcHJvZHVjdENvbG9yU2VsZWN0b3I6ICcucHJvZHVjdC1pdGVtX19wcm9wZXJ0eVtkYXRhLXR5cGU9XCJwcm9kdWN0LWNvbG9yXCJdJyxcbiAgICAgIHByb2R1Y3RTaXplU2VsZWN0b3I6ICcucHJvZHVjdC1pdGVtX19wcm9wZXJ0eVtkYXRhLXR5cGU9XCJwcm9kdWN0LXNpemVcIl0nLFxuICAgICAgcHJvZHVjdFNlbGxlclNlbGVjdG9yOiAnLnByb2R1Y3QtaXRlbV9fc2VsbGVyJyxcbiAgICAgIHByb2R1Y3RPcmdhbml6YXRpb25OYW1lU2VsZWN0b3I6ICcub3JnYW5pemF0aW9uX19uYW1lJyxcbiAgICAgIHByb2R1Y3RPcmdOYW1lU2VsZWN0b3I6ICcub3JnYW5pemF0aW9uX19vcmctbmFtZScsXG4gICAgICBwcm9kdWN0T3JnYW5pemF0aW9uUmVxdWlzaXRlc1NlbGVjdG9yOiAnLm9yZ2FuaXphdGlvbl9fcmVxdWlzaXRlcycsXG4gICAgICBwcm9kdWN0T3JnYW5pemF0aW9uT3JnQWRkcmVzc1NlbGVjdG9yOiAnLm9yZ2FuaXphdGlvbl9fb3JnLWFkZHJlc3MnLFxuICAgICAgcHJvZHVjdENvdW50U2VsZWN0b3I6ICcucHJvZHVjdC1pdGVtX19jb3VudC1udW0nLFxuICAgICAgcHJvZHVjdEF2YWlsYWJsZVNlbGVjdG9yOiAnLnByb2R1Y3QtaXRlbV9fYXZhaWxhYmxlJyxcbiAgICAgIHByb2R1Y3ROZXdQcmljZVNlbGVjdG9yOiAnLnByb2R1Y3QtaXRlbV9fbmV3LXByaWNlJyxcbiAgICAgIHByb2R1Y3RPbGRQcmljZVNlbGVjdG9yOiAnLnByb2R1Y3QtaXRlbV9fb2xkLXByaWNlJyxcbiAgICAgIHByb2R1Y3REaXNjb3VudFNlbGVjdG9yOiAnLmRpc2NvdW50X19sYWJlbFtkYXRhLXR5cGU9XCJwcm9kdWN0LWRpc2NvdW50XCJdJyxcbiAgICAgIHByb2R1Y3REaXNjb3VudFN1bVNlbGVjdG9yOiAnLmRpc2NvdW50X19pdGVtW2RhdGEtdHlwZT1cInByb2R1Y3QtZGlzY291bnRcIl0nLFxuICAgICAgcHJvZHVjdFBlcnNvbkRpc2NvdW50U2VsZWN0b3I6ICcuZGlzY291bnRfX2xhYmVsW2RhdGEtdHlwZT1cInByb2R1Y3QtcGVyc29uLWRpc2NvdW50XCJdJyxcbiAgICAgIHByb2R1Y3RQZXJzb25EaXNjb3VudFN1bVNlbGVjdG9yOiAnLmRpc2NvdW50X19pdGVtW2RhdGEtdHlwZT1cInByb2R1Y3QtcGVyc29uLWRpc2NvdW50XCJdJyxcbiAgICAgIHByb2R1Y3RGYXZvdGl0ZUJ0blNlbGVjdG9yOiAnLnByb2R1Y3QtaXRlbV9faWNvbl90eXBlX2Zhdm9yaXRlJyxcbiAgICAgIHByb2R1Y3REZWxldGVCdG5TZWxlY3RvcjogJy5wcm9kdWN0LWl0ZW1fX2ljb25fdHlwZV9kZWxldGUnLFxuICAgICAgcHJvZHVjdEljb25BY3RpdmVDbGFzczogJ3Byb2R1Y3QtaXRlbV9faWNvbl90eXBlX2FjdGl2ZScsXG4gICAgICBwcm9kdWN0Q291bnRNaW51c0J0blNlbGVjdG9yOiAnLnByb2R1Y3QtaXRlbV9fY291bnQtYnRuX3R5cGVfbWludXMnLFxuICAgICAgcHJvZHVjdENvdW50UGx1c0J0blNlbGVjdG9yOiAnLnByb2R1Y3QtaXRlbV9fY291bnQtYnRuX3R5cGVfcGx1cycsXG4gICAgICBwcm9kdWN0SW5wdXRTZWxlY29yOiAnLnByb2R1Y3RfX2NoZWNrYm94JyxcbiAgICAgIHByb2R1Y3RJbnB1dERlY29yU2VsZWNvcjogJy5wcm9kdWN0X19jaGVja2JveC1kZWNvcl90eXBlX2l0ZW0nLFxuICAgICAgcHJvZHVjdE5ld1ByaWNlU21hbGxUZXh0Q2xhc3M6ICdwcm9kdWN0LWl0ZW1fX25ldy1wcmljZV90eXBlX3NtYWxsJyxcbiAgICAgIHByb2R1Y3RDb3VudEJ0blR5cGVEaXNhYmxlZENsYXNzOiAncHJvZHVjdC1pdGVtX19jb3VudC1idG5fdHlwZV9kaXNhYmxlZCcsXG4gICAgICBwcm9kdWN0UHJvcGVydHlXcmFwcGVyU2VsZWN0b3I6ICcucHJvZHVjdC1pdGVtX19wcm9wZXJ0eS13cmFwcGVyJyxcbiAgICAgIHByb2R1Y3RJdGVtUHJvcGVydGllc1NlbGVjdG9yOiAnLnByb2R1Y3QtaXRlbV9fcHJvcGVydGllcycsXG59XG5cbmV4cG9ydFxuY29uc3QgY2FyZFNldHRpbmcgPSB7XG4gICAgICBjYXJkVGVtcGxhdGVTZWxlY3RvcjogJyNjYXJkJyxcbiAgICAgIGNhcmRTZWxlY3RvcjogJy5jYXJkJyxcbiAgICAgIGNhcmRJY29uU2VsZWN0b3I6ICcuY2FyZF9faWNvbicsXG4gICAgICBjYXJkTnVtYmVyU2VsZWN0b3I6ICcuY2FyZF9fbnVtYmVyJyxcbiAgICAgIGNhcmRJbnB1dFNlbGVjb3I6ICcuY2FyZF9fcmFkaW8nLFxuICAgICAgY2FyZElucHV0RGVjb3JTZWxlY29yOiAnLmNhcmRfX3JhZGlvLWRlY29yJyxcbn1cblxuZXhwb3J0XG5jb25zdCBwaWNrdXBTZXR0aW5nID0ge1xuICAgICAgcGlja3VwVGVtcGxhdGVTZWxlY3RvcjogJyNwaWNrdXAnLFxuICAgICAgcGlja3VwUG9pbnRUZW1wbGF0ZVNlbGVjdG9yOiAnI3BpY2t1cC1wb2ludCcsXG4gICAgICBwaWNrdXBTZWxlY3RvcjogJy5waWNrdXAnLFxuICAgICAgcGlja3VwQWRkcmVzc1NlbGVjdG9yOiAnLnBpY2t1cF9fYWRkcmVzcycsXG4gICAgICBwaWNrdXBQb2ludFJhdGVTZWxlY3RvcjogJy5waWNrdXBfX3JhdGUnLFxuICAgICAgcGlja3VwSW5wdXRTZWxlY29yOiAnLnBpY2t1cF9fcmFkaW8nLFxuICAgICAgcGlja3VwSW5wdXREZWNvclNlbGVjb3I6ICcucGlja3VwX19yYWRpby1kZWNvcicsXG4gICAgICBwaWNrdXBCdG5EZWxldGVTZWxlY29yOiAnLnBpY2t1cF9fZGVsZXRlJyxcbn1cblxuZXhwb3J0XG5jb25zdCBwcm9kdWN0Q29udGFpbmVyU2VsZWN0b3IgPSAnI3Byb2R1Y3QtbGlzdCcsXG4gICAgICBwb3B1cENob29zZVBheUNvbnRhaW5lclNlbGVjdG9yID0gJyNwb3B1cC1jaG9vc2UtcGF5JyxcbiAgICAgIHBvcHVwQ2hvb3NlQWRkcmVzc0NvbnRhaW5lclNlbGVjdG9yID0gJyNwb3B1cC1jaG9vc2UtYWRkcmVzcycsXG4gICAgICBwb3B1cENob29zZVBpY2t1cENvbnRhaW5lclNlbGVjdG9yID0gJyNwb3B1cC1jaG9vc2UtcGlja3VwJyxcbiAgICAgIHBvcHVwQ2hvb3NlUGlja3VwUG9pbnRDb250YWluZXJTZWxlY3RvciA9ICcjcG9wdXAtY2hvb3NlLXBpY2t1cC1wb2ludCcsXG4gICAgICBidG5DaG9vc2VQYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19jb250ZW50LWhlYWRlci1idG5bZGF0YS10eXBlPVwiYnRuLWNob29zZS1wYXlcIl0nKSxcbiAgICAgIGJ0bkNob29zZUFkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19jb250ZW50LWhlYWRlci1idG5bZGF0YS10eXBlPVwiYnRuLWNob29zZS1hZGRyZXNzXCJdJyksXG4gICAgICBidG5TaWRlYmFyQ2hvb3NlUGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldC1vcmRlcl9fYnRuLWVkaXRbZGF0YS10eXBlPVwiYnRuLXNpZGViYXItY2hvb3NlLXBheVwiXScpLFxuICAgICAgYnRuU2lkZWJhckNob29zZUFkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0LW9yZGVyX19idG4tZWRpdFtkYXRhLXR5cGU9XCJidG4tc2lkZWJhci1jaG9vc2UtYWRkcmVzc1wiXScpLFxuICAgICAgcHJvZHVjdHNUaXRsZXMgPSBbJ9GC0L7QstCw0YAnLCAn0YLQvtCy0LDRgNCwJywgJ9GC0L7QstCw0YDQvtCyJ10sXG4gICAgICBkZWxpdmVyeU1vbnRoVGl0bGVzID0gW1xuICAgICAgICAn0Y/QvdCy0LDRgNGPJyxcbiAgICAgICAgJ9GE0LXQstGA0LDQu9GPJyxcbiAgICAgICAgJ9C80LDRgNGC0LAnLFxuICAgICAgICAn0LDQv9GA0LXQu9GPJyxcbiAgICAgICAgJ9C80LDRjycsXG4gICAgICAgICfQuNGO0L3RjycsXG4gICAgICAgICfQuNGO0LvRjycsXG4gICAgICAgICfQsNCy0LPRg9GB0YLQsCcsXG4gICAgICAgICfRgdC10L3RgtGP0LHRgNGPJyxcbiAgICAgICAgJ9C+0LrRgtGP0LHRgNGPJyxcbiAgICAgICAgJ9C90L7Rj9Cx0YDRjycsXG4gICAgICAgICfQtNC10LrQsNCx0YDRjyddLFxuICAgICAgYmFza2V0Rm9ybSA9IGRvY3VtZW50LmZvcm1zWydiYXNrZXQtZm9ybSddLFxuICAgICAgZGVsaXZlcnlJdGVtc0NvbnRhaW5lclNlbGVjdG9yID0gJy5kZWxpdmVyeV9faXRlbXMnO1xuXG5leHBvcnRcbmNvbnN0IGZvcm1TZXR0aW5nID0ge1xuICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2Zvcm0nLFxuICBpbnB1dFNlbGVjdG9yOiAnLnJlY2lwaWVudF9faW5wdXQnLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5iYXNrZXQtb3JkZXJfX2J0bicsXG4gIGlucHV0RXJyb3JDbGFzczogJ3JlY2lwaWVudF9faW5wdXRfdHlwZV9lcnJvcicsXG4gIGVycm9yQ2xhc3M6ICdyZWNpcGllbnRfX2lucHV0X3R5cGVfc2hvdycsXG59XG4iLCJmdW5jdGlvbiBnZXRFbmRMaW5lKG51bSwgdGl0bGVzKSB7XG4gIHJldHVybiB0aXRsZXNbXG4gICAgbnVtICUgMTAgPT09IDEgJiYgbnVtICUgMTAwICE9PSAxMVxuICAgID8gMFxuICAgIDogbnVtICUgMTAgPj0gMiAmJiBudW0gJSAxMCA8PSA0ICYmIChudW0gJSAxMDAgPCAxMCB8fCBudW0gJSAxMDAgPj0gMjApXG4gICAgPyAxXG4gICAgOiAyXG4gIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0RW5kTGluZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCB7IGZvcm1TZXR0aW5nIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzLmpzJztcblxuaW1wb3J0ICogYXMgYWxsIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb24uanMnO1xuaW1wb3J0IFBvcHVwV2l0aENob29zZVBheSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aENob29zZVBheS5qcyc7XG5pbXBvcnQgUG9wdXBXaXRoQ2hvb3NlQWRkcmVzcyBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aENob29zZUFkZHJlc3MuanMnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0LmpzJztcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZC5qcyc7XG5pbXBvcnQgUGlja3VwIGZyb20gJy4uL2NvbXBvbmVudHMvUGlja3VwLmpzJztcbmltcG9ydCBCYXNrZXQgZnJvbSAnLi4vY29tcG9uZW50cy9CYXNrZXQuanMnO1xuaW1wb3J0IERlbGl2ZXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvRGVsaXZlcnkuanMnO1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzJztcblxuY29uc3QgcHJvZHVjdEl0ZW1MaXN0ID0gW107XG5jb25zdCBjYXJkTGlzdCA9IFtdO1xuY29uc3QgcGlja3VwQWRkcmVzc0xpc3QgPSBbXTtcbmNvbnN0IHBpY2t1cFBvaW50QWRkcmVzc0xpc3QgPSBbXTtcblxuLy8gdmFsaWRhdGlvblxuXG5jb25zdCBiYXNrZXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybVNldHRpbmcsIGFsbC5iYXNrZXRGb3JtKTtcblxuLy8gY3JlYXRlIHNsaWNlc1xuXG5jb25zdCBwcm9kdWN0TGlzdCA9IG5ldyBTZWN0aW9uKHtcbiAgICBkYXRhOiBhbGwudXNlck9yZGVyRXhhbXBsZSxcbiAgICByZW5kZXJlcjogKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBuZXcgUHJvZHVjdChcbiAgICAgICAgaXRlbSxcbiAgICAgICAgYWxsLnByb2R1Y3RTZXR0aW5nLFxuICAgICAgICBiYXNrZXQuYWRkUHJvZHVjdEluTGlzdEFycmF5LFxuICAgICAgICBiYXNrZXQucmVtb3ZlUHJvZHVjdEluTGlzdEFycmF5LFxuICAgICAgICBiYXNrZXQuY2hhbmdlQ291bnRQcm9kdWN0TGlzdEFycmF5LFxuICAgICAgICBiYXNrZXQuZGVjcmVhc2VDb3VudGVyQmFza2V0LFxuICAgICAgICBiYXNrZXQuaW5jcmVhc2VDb3VudGVyQmFza2V0LFxuICAgICAgICBiYXNrZXQuZGVjcmVhc2VQcmljZUJhc2tldCxcbiAgICAgICAgYmFza2V0LmluY3JlYXNlUHJpY2VCYXNrZXQsXG4gICAgICAgIGJhc2tldC5kZWNyZWFzZVRvdGFsUHJpY2UsXG4gICAgICAgIGJhc2tldC5pbmNyZWFzZVRvdGFsUHJpY2UsXG4gICAgICAgIGJhc2tldC5kZWNyZWFzZVRvdGFsQ291bnQsXG4gICAgICAgIGJhc2tldC5pbmNyZWFzZVRvdGFsQ291bnQsXG4gICAgICAgIGJhc2tldC5kZWNyZWFzZVRvdGFsT2xkUHJpY2UsXG4gICAgICAgIGJhc2tldC5pbmNyZWFzZVRvdGFsT2xkUHJpY2UsXG4gICAgICAgIGJhc2tldC5kZWNyZWFzZVRvdGFsRGlzY291bnQsXG4gICAgICAgIGJhc2tldC5pbmNyZWFzZVRvdGFsRGlzY291bnQsXG4gICAgICAgIGJhc2tldC5kZWNyZWFzZUNvdW50LFxuICAgICAgICBiYXNrZXQuaW5jcmVhc2VDb3VudCxcbiAgICAgICAgYmFza2V0LmNoZWNrSW5wdXRQcm9kdWN0cyxcbiAgICAgICAgYmFza2V0LmRpc2FibGVJbnB1dEFsbFByb2R1Y3QsXG4gICAgICAgIGJhc2tldC5lbmFibGVJbnB1dEFsbFByb2R1Y3QsXG4gICAgICAgIGJhc2tldC5zZXRQcm9kdWN0TWlzc2luZyxcbiAgICAgICk7XG4gICAgICBwcm9kdWN0SXRlbUxpc3QucHVzaChwcm9kdWN0KTtcbiAgICAgIGNvbnN0IHByb2R1Y3RFbGVtZW50ID0gcHJvZHVjdC5nZW5lcmF0ZVByb2R1Y3QoKTtcbiAgICAgIHByb2R1Y3RMaXN0LnNldEl0ZW0ocHJvZHVjdEVsZW1lbnQpO1xuICAgIH1cbiAgfSxcbiAgYWxsLnByb2R1Y3RDb250YWluZXJTZWxlY3Rvcixcbik7XG5cbmNvbnN0IHBvcHVwQ2FyZExpc3QgPSBuZXcgU2VjdGlvbih7XG4gICAgZGF0YTogYWxsLnVzZXJEYXRhRXhhbXBsZS5jYXJkcyxcbiAgICByZW5kZXJlcjogKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChpdGVtLCBhbGwuY2FyZFNldHRpbmcsIHBvcHVwV2l0aENob29zZVBheS5kaXNhYmxlZEFsbElucHV0cyk7XG4gICAgICBjYXJkTGlzdC5wdXNoKGNhcmQpO1xuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkLmdlbmVyYXRlQ2FyZCgpO1xuICAgICAgcG9wdXBDYXJkTGlzdC5zZXRJdGVtKGNhcmRFbGVtZW50KTtcbiAgICB9LFxuICB9LFxuICBhbGwucG9wdXBDaG9vc2VQYXlDb250YWluZXJTZWxlY3Rvcixcbik7XG5cbmNvbnN0IHBvcHVwUGlja3VwTGlzdCA9IG5ldyBTZWN0aW9uKHtcbiAgICBkYXRhOiBhbGwudXNlckRhdGFFeGFtcGxlLmRlbGV2ZXJ5LnBpY2t1cCxcbiAgICByZW5kZXJlcjogKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHBpY2t1cCA9IG5ldyBQaWNrdXAoXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIGFsbC5waWNrdXBTZXR0aW5nLnBpY2t1cFRlbXBsYXRlU2VsZWN0b3IsXG4gICAgICAgIGFsbC5waWNrdXBTZXR0aW5nLFxuICAgICAgICBwb3B1cFdpdGhDaG9vc2VBZGRyZXNzLmRpc2FibGVkQWxsSW5wdXRzXG4gICAgICApO1xuICAgICAgcGlja3VwQWRkcmVzc0xpc3QucHVzaChwaWNrdXApO1xuICAgICAgY29uc3QgcGlja3VwRWxlbWVudCA9IHBpY2t1cC5nZW5lcmF0ZVBpY2t1cEVsZW1lbnQoKTtcbiAgICAgIHBvcHVwUGlja3VwTGlzdC5zZXRJdGVtKHBpY2t1cEVsZW1lbnQpO1xuICAgIH1cbiAgfSxcbiAgYWxsLnBvcHVwQ2hvb3NlUGlja3VwQ29udGFpbmVyU2VsZWN0b3IsXG4pO1xuXG5jb25zdCBwb3B1cFBpY2t1cFBvaW50TGlzdCA9IG5ldyBTZWN0aW9uKHtcbiAgICBkYXRhOiBhbGwudXNlckRhdGFFeGFtcGxlLmRlbGV2ZXJ5LnBpY2t1cFBvaW50LFxuICAgIHJlbmRlcmVyOiAoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgcGlja3VwUG9pbnQgPSBuZXcgUGlja3VwKFxuICAgICAgICBpdGVtLFxuICAgICAgICBhbGwucGlja3VwU2V0dGluZy5waWNrdXBQb2ludFRlbXBsYXRlU2VsZWN0b3IsXG4gICAgICAgIGFsbC5waWNrdXBTZXR0aW5nLFxuICAgICAgICBwb3B1cFdpdGhDaG9vc2VBZGRyZXNzLmRpc2FibGVkQWxsSW5wdXRzXG4gICAgICApO1xuICAgICAgcGlja3VwUG9pbnRBZGRyZXNzTGlzdC5wdXNoKHBpY2t1cFBvaW50KTtcbiAgICAgIGNvbnN0IHBpY2t1cFBvaW50RWxlbWVudCA9IHBpY2t1cFBvaW50LmdlbmVyYXRlUGlja3VwUG9pbnRFbGVtZW50KCk7XG4gICAgICBwb3B1cFBpY2t1cFBvaW50TGlzdC5zZXRJdGVtKHBpY2t1cFBvaW50RWxlbWVudCk7XG4gICAgfVxuICB9LFxuICBhbGwucG9wdXBDaG9vc2VQaWNrdXBQb2ludENvbnRhaW5lclNlbGVjdG9yLFxuKTtcblxuY29uc3QgYmFza2V0ID0gbmV3IEJhc2tldChcbiAgYWxsLmJhc2tldFNldHRpbmcsXG4gIHByb2R1Y3RJdGVtTGlzdCxcbiAge1xuICAgIHJlbmRlckRlbGl2ZXJpZXM6IChpdGVtTGlzdCkgPT4ge1xuICAgICAgY29uc3QgZGVsaXZlcnlMaXN0SXRlbSA9IG5ldyBTZWN0aW9uKFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YTogaXRlbUxpc3QsXG4gICAgICAgICAgcmVuZGVyZXI6IChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IG5ldyBEZWxpdmVyeShcbiAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RWxlbWVudCA9IGRlbGl2ZXJ5LmdlbmVyYXRlRGVsaXZlcnkoKTtcbiAgICAgICAgICAgIGRlbGl2ZXJ5TGlzdEl0ZW0uc2V0SXRlbShkZWxpdmVyeUVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWxsLmRlbGl2ZXJ5SXRlbXNDb250YWluZXJTZWxlY3RvclxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIGRlbGl2ZXJ5TGlzdEl0ZW07XG4gICAgfSxcbiAgfVxuKTtcblxuY29uc3QgcG9wdXBXaXRoQ2hvb3NlUGF5ID0gbmV3IFBvcHVwV2l0aENob29zZVBheShcbiAgYWxsLnBvcHVwU2VsZWN0b3JzLmNob29zZVBheSwgY2FyZExpc3QsIGJhc2tldC5jaGFuZ2VDYXJkXG4pO1xuY29uc3QgcG9wdXBXaXRoQ2hvb3NlQWRkcmVzcyA9IG5ldyBQb3B1cFdpdGhDaG9vc2VBZGRyZXNzKFxuICBhbGwucG9wdXBTZWxlY3RvcnMuY2hvb3NlQWRkcmVzcywgcGlja3VwQWRkcmVzc0xpc3QsIHBpY2t1cFBvaW50QWRkcmVzc0xpc3QsIGJhc2tldC5jaGFuZ2VBZGRyZXNzXG4pO1xuXG5wcm9kdWN0TGlzdC5yZW5kZXJJdGVtcygpXG5wb3B1cENhcmRMaXN0LnJlbmRlckl0ZW1zKCk7XG5wb3B1cFBpY2t1cExpc3QucmVuZGVySXRlbXMoKTtcbnBvcHVwUGlja3VwUG9pbnRMaXN0LnJlbmRlckl0ZW1zKCk7XG5cbi8vIHNldCBsaXN0ZW5lcnNcblxuYWxsLmJ0bkNob29zZVBheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcG9wdXBXaXRoQ2hvb3NlUGF5Lm9wZW4oKTtcbn0pO1xuXG5hbGwuYnRuQ2hvb3NlQWRkcmVzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcG9wdXBXaXRoQ2hvb3NlQWRkcmVzcy5vcGVuKCk7XG59KTtcblxuYWxsLmJ0blNpZGViYXJDaG9vc2VQYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBvcHVwV2l0aENob29zZVBheS5vcGVuKCk7XG59KTtcblxuYWxsLmJ0blNpZGViYXJDaG9vc2VBZGRyZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwb3B1cFdpdGhDaG9vc2VBZGRyZXNzLm9wZW4oKTtcbn0pO1xuXG5iYXNrZXQuYWRkSW5pY2lhbFByb2R1Y3RJbkxpc3RBcnJheSgpXG5iYXNrZXQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbmJhc2tldC5lbmFibGVBbGxQcm9kdWN0cygpO1xucG9wdXBXaXRoQ2hvb3NlUGF5LnNldEluaXRpYWxDYXJkKCk7XG5wb3B1cFdpdGhDaG9vc2VQYXkuc2V0RXZlbnRMaXN0ZW5lcigpO1xucG9wdXBXaXRoQ2hvb3NlQWRkcmVzcy5zZXRJbml0aWFsQWRkcmVzcygpO1xucG9wdXBXaXRoQ2hvb3NlQWRkcmVzcy5zZXRFdmVudExpc3RlbmVyKCk7XG5cbmJhc2tldEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuIl0sIm5hbWVzIjpbInByb2R1Y3RzVGl0bGVzIiwiZGVsaXZlcnlNb250aFRpdGxlcyIsImdldEVuZExpbmUiLCJCYXNrZXQiLCJjb25zdHJ1Y3RvciIsImJhc2tldFNldHRpbmciLCJwcm9kdWN0TGlzdCIsInJlbmRlckRlbGl2ZXJpZXMiLCJfYmFza2V0U2V0dGluZyIsIl9pbml0aWFsUHJvZHVjdExpc3QiLCJfcHJvZHVjdExpc3QiLCJfcHJvZHVjdExpc3RNaXNzaW5nQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJvZHVjdExpc3RNaXNzaW5nQ29udGFpbmVyU2VsZWN0b3IiLCJfcmVuZGVyRGVsaXZlcmllcyIsIl9hY2NvcmRpb25Qcm9kdWN0Q291bnRFbGVtZW50IiwiYmFza2V0QWNjb3JkaW9uUHJvZHVjdENvdW50U2VsZWN0b3IiLCJfYWNjb3JkaW9uUHJvZHVjdENvdW50IiwiX2FjY29yZGlvblByb2R1Y3RQcmljZUVsZW1lbnQiLCJiYXNrZXRBY2NvcmRpb25Qcm9kdWN0UHJpY2VTZWxlY3RvciIsIl9hY2NvcmRpb25Qcm9kdWN0UHJpY2UiLCJfYWNjb3JkaW9uQ2hlY2tib3hBbGxQcm9kdWN0IiwiYWNjb3JkaW9uQ2hlY2tib3hBbGxQcm9kdWN0U2VsZWN0b3IiLCJfYWNjb3JkaW9uQ2hlY2tib3hBbGxQcm9kdWN0RGVjb3IiLCJhY2NvcmRpb25DaGVja2JveEFsbFByb2R1Y3REZWNvclNlbGVjdG9yIiwiX2NhcmRJY29ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYXJkSWNvblNlbGVjdG9yIiwiX2NhcmROdW1iZXJzIiwiY2FyZE51bWJlclNlbGVjdG9yIiwiX2NhcmREYXRlcyIsImNhcmREYXRlU2VsZWN0b3IiLCJfcGlja3VwVHlwZSIsInBpY2t1cFR5cGVTZWxlY3RvciIsIl9waWNrdXBTaWRlYmFyVHlwZSIsInBpY2t1cFNpZGViYXJUeXBlU2VsZWN0b3IiLCJfcGlja3VwRGF0YSIsInBpY2t1cERhdGFTZWxlY3RvciIsIl9waWNrdXBBZGRyZXNzIiwicGlja3VwQWRkcmVzc1NlbGVjdG9yIiwiX3BpY2t1cFNpZGViYXJBZGRyZXNzIiwicGlja3VwU2lkZWJhckFkZHJlc3NTZWxlY3RvciIsIl9waWNrdXBSYXRlIiwicGlja3VwUmF0ZVNlbGVjdG9yIiwiX3BpY2t1cE9mZmljZUhvdXJzIiwicGlja3VwT2ZmaWNlSG91cnNTZWxlY3RvciIsIl9iYXNrZXRUb3RhbFByaWNlIiwiYmFza2V0VG90YWxQcmljZVNlbGVjdG9yIiwiX2Jhc2tldFRvdGFsQ291bnQiLCJiYXNrZXRUb3RhbENvdW50U2VsZWN0b3IiLCJfYmFza2V0VG90YWxPbGRQcmljZSIsImJhc2tldFRvdGFsT2xkUHJpY2VTZWxlY3RvciIsIl9iYXNrZXRUb3RhbERpc2NvdW50IiwiYmFza2V0VG90YWxEaXNjb3VudFNlbGVjdG9yIiwiX2Jhc2tldFRvdGFsRGVsaXZlcnlEYXRlIiwiYmFza2V0VG90YWxEZWxpdmVyeURhdGVTZWxlY3RvciIsIl9iYXNrZXREZWxpdmVyeURhdGVJdGVtTGlzdCIsImJhc2tldERlbGl2ZXJ5RGF0ZUl0ZW1MaXN0U2VsZWN0b3IiLCJfYmFza2V0Q2hlY2tib3hQYXltZW50VHlwZSIsImJhc2tldENoZWNrYm94UGF5bWVudFR5cGVTZWxlY3RvciIsIl9iYXNrZXRDaGVja2JveFBheW1lbnRUeXBlRGVjb3IiLCJiYXNrZXRDaGVja2JveFBheW1lbnRUeXBlRGVjb3JTZWxlY3RvciIsIl9iYXNrZXRUb3RhbEJ0blN1Ym1pdCIsImJhc2tldFRvdGFsQnRuU3VibWl0U2VsZWN0b3IiLCJfaGVhZGVySWNvbkNvdW50ZXIiLCJoZWFkZXJJY29uQ291bnRlclNlbGVjdG9yIiwiX25hdmJhck1vYmlsZUljb25Db3VudGVyIiwibmF2YmFyTW9iaWxlSWNvbkNvdW50ZXJTZWxlY3RvciIsIl90b3RhbFByaWNlIiwiX3RvdGFsQ291bnQiLCJfY291bnQiLCJfdG90YWxPbGRQcmljZSIsIl90b3RhbERpc2NvdW50IiwiYWxsUHJvZHVjdENoZWNrYm94SXNDaGVja2VkIiwiX3JlbmRlclRvdGFsRGlzY291bnQiLCJ0ZXh0Q29udGVudCIsInRvU3RyaW5nIiwicmVwbGFjZSIsImRlY3JlYXNlVG90YWxEaXNjb3VudCIsInZhbHVlIiwiaW5jcmVhc2VUb3RhbERpc2NvdW50IiwiX3JlbmRlclRvdGFsT2xkUHJpY2UiLCJkZWNyZWFzZVRvdGFsT2xkUHJpY2UiLCJpbmNyZWFzZVRvdGFsT2xkUHJpY2UiLCJfcmVuZGVyVG90YWxDb3VudCIsIl9jaGFuZ2VUZXh0VG90YWxCdG4iLCJkZWNyZWFzZVRvdGFsQ291bnQiLCJjb3VudCIsImluY3JlYXNlVG90YWxDb3VudCIsIl9yZW5kZXJDb3VudCIsImRlY3JlYXNlQ291bnQiLCJpbmNyZWFzZUNvdW50IiwiX3JlbmRlclRvdGFsUHJpY2UiLCJkZWNyZWFzZVRvdGFsUHJpY2UiLCJjaGVja0lucHV0UHJvZHVjdHMiLCJkaXNhYmxlSW5wdXRBbGxQcm9kdWN0IiwiaW5jcmVhc2VUb3RhbFByaWNlIiwiZW5hYmxlSW5wdXRBbGxQcm9kdWN0IiwiX3JlbmRlclRvdGFsRGVsaXZlcnlEYXRlIiwiZmlyc3REYXRlIiwibGFzdERhdGUiLCJmaXJzdE1vbnRoIiwiZ2V0TW9udGgiLCJsYXN0TW9udGgiLCJnZXREYXRlIiwic3Vic3RyaW5nIiwiX2NhbGN1bGF0ZURlbGl2ZXJ5RGF0ZSIsImFycmF5TGlzdCIsImxlbmd0aCIsImFycmF5RGF0YUl0ZW1zIiwiYXJyYXlEYXRhSXRlbXNSZXN1bHQiLCJJbmZpbml0eSIsImZvckVhY2giLCJwcm9kdWN0IiwiZGVsaXZlcnlEYXRlIiwiZGF0ZSIsIkRhdGUiLCJwYXJzZSIsInB1c2giLCJPYmplY3QiLCJ2YWx1ZXMiLCJpdGVtIiwia2V5cyIsImltYWdlIiwiZGF0YSIsImkiLCJkZWxpdmVyeVNsaWNlIiwicmVtb3ZlSXRlbXMiLCJyZW5kZXJJdGVtcyIsInNldFByb2R1Y3RNaXNzaW5nIiwicHJlcGVuZCIsIl9yZW5kZXJQcmljZUJhc2tldCIsImRlY3JlYXNlUHJpY2VCYXNrZXQiLCJpbmNyZWFzZVByaWNlQmFza2V0IiwiX3JlbmRlckNvdW50ZXJCYXNrZXQiLCJkZWNyZWFzZUNvdW50ZXJCYXNrZXQiLCJpbmNyZWFzZUNvdW50ZXJCYXNrZXQiLCJfcmVuZGVyQ2FyZHMiLCJjYXJkIiwiaWNvbiIsInNyYyIsImNhcmRVcmxJY29uIiwibnVtYmVyIiwiY2FyZE51bWJlciIsImNhcmREYXRlIiwiY2hhbmdlQ2FyZCIsIl9yZW5kZXJBZGRyZXNzIiwiYWRkcmVzcyIsInRlbXBsYXRlU2VsZWN0b3IiLCJwaWNrdXBUZW1wbGF0ZVNlbGVjdG9yIiwicGlja3VwVHlwZVRleHQiLCJwaWNrdXBTaWRlYmFyVHlwZVRleHQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwaWNrdXBEYXRhSGlkZUNsYXNzIiwicmF0ZSIsIm9mZmljZUhvdXJzIiwicGlja3VwUG9pbnRUeXBlVGV4dCIsImFkZCIsInBpY2t1cFBvaW50U2lkZWJhclR5cGVUZXh0IiwiY2hhbmdlQWRkcmVzcyIsImNoYW5nZUNvdW50UHJvZHVjdExpc3RBcnJheSIsInByb2R1Y3RJZCIsImlkIiwiY291bnREYXRlIiwidmFsdWVzRGF0ZSIsIm5ld09iaiIsInJlbW92ZVByb2R1Y3RJbkxpc3RBcnJheSIsImlkRm9yRGVsZXRlQ2FyZCIsImZpbHRlciIsImFkZEluaWNpYWxQcm9kdWN0SW5MaXN0QXJyYXkiLCJhZGRQcm9kdWN0SW5MaXN0QXJyYXkiLCJwcm9kdWN0SXRlbSIsImNoZWNrZWQiLCJlbmFibGVBbGxQcm9kdWN0cyIsImlzQ2hlY2tlZCIsImVuYWJsZUlucHV0IiwiZXZlcnkiLCJiYXNrZXRPcmRlckJ0blNtYWxsVGV4dENsYXNzIiwiX3RvZ2dsZUlucHV0UGF5bWVudFR5cGUiLCJzZXRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNhYmxlSW5wdXQiLCJDYXJkIiwiY2FyZFNldHRpbmciLCJkaXNhYmxlZEFsbElucHV0cyIsIl9jYXJkU2V0dGluZyIsIl9kaXNhYmxlZEFsbElucHV0cyIsIl9nZXRUZW1wbGF0ZSIsImNhcmRFbGVtZW50IiwiY2FyZFRlbXBsYXRlU2VsZWN0b3IiLCJjb250ZW50IiwiY2FyZFNlbGVjdG9yIiwiY2xvbmVOb2RlIiwiX3NldEV2ZW50TGlzdGVuZXIiLCJfY2FyZElucHV0RGVjb3IiLCJfY2FyZElucHV0IiwiZ2VuZXJhdGVDYXJkIiwiX2NhcmQiLCJjYXJkSW5wdXRTZWxlY29yIiwiY2FyZElucHV0RGVjb3JTZWxlY29yIiwiRGVsaXZlcnkiLCJkZWxpdmVyeURhdGVJdGVtU2V0dGluZyIsIl9kYXRhIiwiX2RhdGFJdGVtcyIsIl9kZWxpdmVyeURhdGVJdGVtU2V0dGluZyIsIl9nZXREZWxpdmVyeUl0ZW1UZW1wbGF0ZSIsImRlbGl2ZXJ5SXRlbUVsZW1lbnQiLCJfZ2VuZXJhdGVEZWxpdmVyeUl0ZW0iLCJfZGVsaXZlcnlEYXRlSXRlbSIsIl9nZXREYXRlcyIsIm1vbnRoIiwiX2dldERlbGl2ZXJ5VGVtcGxhdGUiLCJkZWxpdmVyeUVsZW1lbnQiLCJnZW5lcmF0ZURlbGl2ZXJ5IiwiX2RlbGl2ZXJ5RGF0ZSIsIl9kZWxpdmVyeUl0ZW1Db250YWluZXIiLCJGb3JtVmFsaWRhdG9yIiwiZm9ybVNldHRpbmciLCJmb3JtIiwiX2Zvcm1TZXR0aW5nIiwiX2Zvcm0iLCJfaW5wdXRMaXN0IiwiQXJyYXkiLCJmcm9tIiwiaW5wdXRTZWxlY3RvciIsIl9idXR0b25FbGVtZW50Iiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaGFzSW52YWxpZElucHV0Iiwic29tZSIsImlucHV0RWxlbWVudCIsInZhbGlkaXR5IiwidmFsaWQiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJkaXNhYmxlZCIsIl9oaWRlSW5wdXRFcnJvciIsImVycm9yRWxlbWVudCIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfc2hvd0lucHV0RXJyb3IiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJlbmFibGVWYWxpZGF0aW9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiUGlja3VwIiwiZWxlbWVudFNldHRpbmciLCJfZWxlbWVudFNldHRpbmciLCJfcGlja3VwdFNlbGVjdG9yIiwicGlja3VwU2VsZWN0b3IiLCJlbGVtZW50Rm9yRGVsZXRlIiwiX2VsZW1lbnRJbnB1dERlY29yIiwiX2VsZW1lbnRCdG5EZWxldGUiLCJlbGVtZW50IiwiX2VsZW1lbnRJbnB1dCIsImdlbmVyYXRlUGlja3VwRWxlbWVudCIsIl9waWNrdXBFbGVtZW50IiwicGlja3VwSW5wdXRTZWxlY29yIiwicGlja3VwSW5wdXREZWNvclNlbGVjb3IiLCJwaWNrdXBCdG5EZWxldGVTZWxlY29yIiwiZ2VuZXJhdGVQaWNrdXBQb2ludEVsZW1lbnQiLCJfcGlja3VwUG9pbnRFbGVtZW50IiwicGlja3VwUG9pbnRSYXRlU2VsZWN0b3IiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXAiLCJjbG9zZSIsImJpbmQiLCJvcGVuIiwiX2hhbmRsZUVzY0Nsb3NlIiwia2V5Iiwic2V0RXZlbnRMaXN0ZW5lciIsInRhcmdldCIsImNvbnRhaW5zIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlBvcHVwV2l0aENob29zZUFkZHJlc3MiLCJwaWNrdXBBZGRyZXNzTGlzdCIsInBpY2t1cFBvaW50QWRkcmVzc0xpc3QiLCJoYW5kbGVDaGFuZ2VFbGVtZW50IiwiX3BpY2t1cEFkZHJlc3NMaXN0IiwiX3BpY2t1cFBvaW50QWRkcmVzc0xpc3QiLCJfcG9wdXBCdG4iLCJfcG9wdXBQaWNrdXBUYWIiLCJfcG9wdXBQaWNrdXBCbG9ja1dpdGhUYWIiLCJfcG9wdXBQaWNrdXBQb2ludFRhYiIsIl9wb3B1cFBpY2t1cFBvaW50QmxvY2tXaXRoVGFiIiwiX2hhbmRsZUNoYW5nZUVsZW1lbnQiLCJfdGFic0l0ZW1zIiwiX3RhYnNJdGVtc0Jsb2NrcyIsIl9zZXRBY3RpdmVUYWIiLCJ0YWIiLCJibG9jayIsInN0eWxlIiwiZGlzcGxheSIsIl9hY3RpdmVUYWIiLCJpbmRleE9mIiwic2V0SW5pdGlhbEFkZHJlc3MiLCJfYWN0aXZlQWRkcmVzcyIsIl9jaGFuZ2VFbGVtZW50IiwiZmluZCIsImFjdGl2ZUVsZW1lbnQiLCJQb3B1cFdpdGhDaG9vc2VQYXkiLCJjYXJkTGlzdCIsImhhbmRsZUNoYW5nZUNhcmQiLCJfY2FyZExpc3QiLCJfY2FyZEJ0biIsIl9oYW5kbGVDaGFuZ2VDYXJkIiwic2V0SW5pdGlhbENhcmQiLCJfYWN0aXZlQ2FyZCIsIl9jaGFuZ2VDYXJkIiwiYWN0aXZlQ2FyZCIsIlByb2R1Y3QiLCJwcm9kdWN0U2V0dGluZyIsImhhbmRsZUFkZFByb2R1Y3RUb0FycmF5IiwiaGFuZGxlUmVtb3ZlUHJvZHVjdEZyb21BcnJheSIsImhhbmRsZUNoYW5nZUNvdW50UHJvZHVjdEluQXJyYXkiLCJoYW5kbGVEZWNyZWFzZUFjY29yZGlvbkNvdW50ZXIiLCJoYW5kbGVJbmNyZWFzZUFjY29yZGlvbkNvdW50ZXIiLCJoYW5kbGVEZWNyZWFzZUFjY29yZGlvblByaWNlIiwiaGFuZGxlSW5jcmVhc2VBY2NvcmRpb25QcmljZSIsImhhbmRsZURlY3JlYXNlVG90YWxQcmljZSIsImhhbmRsZUluY3JlYXNlVG90YWxQcmljZSIsImhhbmRsZURlY3JlYXNlVG90YWxDb3VudCIsImhhbmRsZUluY3JlYXNlVG90YWxDb3VudCIsImhhbmRsZURlY3JlYXNlVG90YWxPbGRQcmljZSIsImhhbmRsZUluY3JlYXNlVG90YWxPbGRQcmljZSIsImhhbmRsZURlY3JlYXNlVG90YWxEaXNjb3VudCIsImhhbmRsZUluY3JlYXNlVG90YWxEaXNjb3VudCIsImhhbmRsZURlY3JlYXNlQ291bnQiLCJoYW5kbGVJbmNyZWFzZUNvdW50IiwiaGFuZGxlQ2hlY2tJbnB1dFByb2R1Y3RzIiwiaGFuZGxlRGlzYWJsZUlucHV0QWxsUHJvZHVjdCIsImhhbmRsZUVuYWJsZUlucHV0QWxsUHJvZHVjdCIsImhhbmRsZVNldFByb2R1Y3RNaXNzaW5nIiwiX29sZFByaWNlIiwib2xkUHJpY2UiLCJfcHJvZHVjdFNldHRpbmciLCJfaGFuZGxlQWRkUHJvZHVjdCIsIl9oYW5kbGVSZW1vdmVQcm9kdWN0IiwiX2hhbmRsZUNoYW5nZUNvdW50UHJvZHVjdEluQXJyYXkiLCJfaGFuZGxlRGVjcmVhc2VBY2NvcmRpb25Db3VudGVyIiwiX2hhbmRsZUluY3JlYXNlQWNjb3JkaW9uQ291bnRlciIsIl9oYW5kbGVEZWNyZWFzZUFjY29yZGlvblByaWNlIiwiX2hhbmRsZUluY3JlYXNlQWNjb3JkaW9uUHJpY2UiLCJfaGFuZGxlRGVjcmVhc2VUb3RhbFByaWNlIiwiX2hhbmRsZUluY3JlYXNlVG90YWxQcmljZSIsIl9oYW5kbGVEZWNyZWFzZVRvdGFsQ291bnQiLCJfaGFuZGxlSW5jcmVhc2VUb3RhbENvdW50IiwiX2hhbmRsZURlY3JlYXNlVG90YWxPbGRQcmljZSIsIl9oYW5kbGVJbmNyZWFzZVRvdGFsT2xkUHJpY2UiLCJfaGFuZGxlRGVjcmVhc2VUb3RhbERpc2NvdW50IiwiX2hhbmRsZUluY3JlYXNlVG90YWxEaXNjb3VudCIsIl9oYW5kbGVEZWNyZWFzZUNvdW50IiwiX2hhbmRsZUluY3JlYXNlQ291bnQiLCJfaGFuZGxlQ2hlY2tJbnB1dFByb2R1Y3RzIiwiX2hhbmRsZURpc2FibGVJbnB1dEFsbFByb2R1Y3QiLCJfaGFuZGxlRW5hYmxlSW5wdXRBbGxQcm9kdWN0IiwiX2hhZGxlU2V0UHJvZHVjdE1pc3NpbmciLCJfcmVuZGVyT2xkU3VtIiwic3VtIiwiZGlzY291bnQiLCJkaXNjb3VudFVzZXIiLCJfcHJvZHVjdCIsInByb2R1Y3RPbGRQcmljZVNlbGVjdG9yIiwicHJvZHVjdERpc2NvdW50U2VsZWN0b3IiLCJwcmljZUluZm8iLCJwcm9kdWN0RGlzY291bnRTdW1TZWxlY3RvciIsInByb2R1Y3RQZXJzb25EaXNjb3VudFNlbGVjdG9yIiwicHJvZHVjdFBlcnNvbkRpc2NvdW50U3VtU2VsZWN0b3IiLCJfY2FsY3VsYXRlT2xkU3VtIiwicXVhbnRpdHkiLCJfcmVuZGVyU3VtIiwiX25ld1ByaWNlRWxlbWVudCIsInByb2R1Y3ROZXdQcmljZVNtYWxsVGV4dENsYXNzIiwiX2NhbGN1bGF0ZVN1bSIsIl9zdW1EaXNjb3VudCIsIl9yZW5kZXJDb3VudGVyIiwiX3Byb2R1Y3RDb3VudCIsIl9pbmNyZWFzZUNvdW50ZXIiLCJfcHJvZHVjdENvdW50UGx1c0J0biIsInByb2R1Y3RDb3VudEJ0blR5cGVEaXNhYmxlZENsYXNzIiwiYXZhaWxhYmxlIiwiX3Byb2R1Y3RDb3VudE1pbnVzQnRuIiwicGFyc2VJbnQiLCJfZGVjcmVhc2VDb3VudGVyIiwiX3Byb2R1Y3RJbnB1dCIsIl9yZW1vdmVQcm9kdWN0IiwiX3NldEV2ZW50TGlzdGVuZXJGb3JQcm9kdWN0TWlzc2luZyIsIl9wcm9kdWN0TWlzc2luZ0RlbGV0ZUJ0biIsIl9wcm9kdWN0TWlzc2luZyIsIl9wcm9kdWN0TWlzc2luZ0Zhdm9yaXRlQnRuIiwiX3Byb2R1Y3RGYXZvcml0ZUJ0biIsInRvZ2dsZSIsInByb2R1Y3RJY29uQWN0aXZlQ2xhc3MiLCJfcHJvZHVjdElucHV0RGVjb3IiLCJfcHJvZHVjdERlbGV0ZUJ0biIsIml0ZW1TZWxlY3RvciIsInByb2R1Y3RFbGVtZW50IiwiX2dlbmVyYXRlUHJvZHVjdE1pc3NpbmciLCJwcm9kdWN0TWlzc2luZ1RlbXBsYXRlU2VsZWN0b3IiLCJwcm9kdWN0TWlzc2luZ1NlbGVjdG9yIiwicHJvZHVjdFByZXZpZXdTZWxlY3RvciIsInByb2R1Y3RUaXRsZVNlbGVjdG9yIiwibmFtZSIsInRyaW0iLCJhbHQiLCJjb2xvciIsInNpemUiLCJwcm9kdWN0Q29sb3JTZWxlY3RvciIsInByb2R1Y3RTaXplU2VsZWN0b3IiLCJwcm9kdWN0UHJvcGVydHlXcmFwcGVyU2VsZWN0b3IiLCJwcm9kdWN0SXRlbVByb3BlcnRpZXNTZWxlY3RvciIsInByb2R1Y3RGYXZvdGl0ZUJ0blNlbGVjdG9yIiwicHJvZHVjdERlbGV0ZUJ0blNlbGVjdG9yIiwiZ2VuZXJhdGVQcm9kdWN0IiwicHJvZHVjdFRlbXBsYXRlU2VsZWN0b3IiLCJwcm9kdWN0U2VsZWN0b3IiLCJwcm9kdWN0SW5wdXRTZWxlY29yIiwicHJvZHVjdElucHV0RGVjb3JTZWxlY29yIiwicHJvZHVjdFNlbGxlclNlbGVjdG9yIiwic2VsbGVyIiwicHJvZHVjdE9yZ2FuaXphdGlvbk5hbWVTZWxlY3RvciIsIm9yZ2FuaXphdGlvbiIsInByb2R1Y3RPcmdOYW1lU2VsZWN0b3IiLCJvcmdhbml6YXRpb25JbmZvIiwib3JnTmFtZSIsInByb2R1Y3RPcmdhbml6YXRpb25SZXF1aXNpdGVzU2VsZWN0b3IiLCJyZXF1aXNpdGVzIiwicHJvZHVjdE9yZ2FuaXphdGlvbk9yZ0FkZHJlc3NTZWxlY3RvciIsIm9yZ0FkZHJlc3MiLCJwcm9kdWN0Q291bnRTZWxlY3RvciIsInByb2R1Y3ROZXdQcmljZVNlbGVjdG9yIiwicHJvZHVjdENvdW50TWludXNCdG5TZWxlY3RvciIsInByb2R1Y3RDb3VudFBsdXNCdG5TZWxlY3RvciIsInByb2R1Y3RBdmFpbGFibGVTZWxlY3RvciIsIlNlY3Rpb24iLCJyZW5kZXJlciIsImNvbnRhaW5lclNlbGVjdG9yIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImlubmVySFRNTCIsInNldEl0ZW0iLCJyZXZlcnNlIiwicHJvZHVjdEljb25TaG9ydCIsInByb2R1Y3RJY29uQ2FzZSIsInByb2R1Y3RJY29uUGVuY2lscyIsImNhcmRJY29uTWlyIiwiY2FyZEljb25WaXNhIiwiY2FyZEljb25NYXN0ZXJDYXJkIiwiY2FyZEljb25NYWV0cm8iLCJ1c2VyRGF0YUV4YW1wbGUiLCJkZWxldmVyeSIsInBpY2t1cCIsInBpY2t1cFBvaW50IiwiY2FyZHMiLCJ1c2VyT3JkZXJFeGFtcGxlIiwicG9wdXBTZWxlY3RvcnMiLCJjaG9vc2VQYXkiLCJjaG9vc2VBZGRyZXNzIiwicGlja3VwU2V0dGluZyIsInBpY2t1cFBvaW50VGVtcGxhdGVTZWxlY3RvciIsInByb2R1Y3RDb250YWluZXJTZWxlY3RvciIsInBvcHVwQ2hvb3NlUGF5Q29udGFpbmVyU2VsZWN0b3IiLCJwb3B1cENob29zZUFkZHJlc3NDb250YWluZXJTZWxlY3RvciIsInBvcHVwQ2hvb3NlUGlja3VwQ29udGFpbmVyU2VsZWN0b3IiLCJwb3B1cENob29zZVBpY2t1cFBvaW50Q29udGFpbmVyU2VsZWN0b3IiLCJidG5DaG9vc2VQYXkiLCJidG5DaG9vc2VBZGRyZXNzIiwiYnRuU2lkZWJhckNob29zZVBheSIsImJ0blNpZGViYXJDaG9vc2VBZGRyZXNzIiwiYmFza2V0Rm9ybSIsImZvcm1zIiwiZGVsaXZlcnlJdGVtc0NvbnRhaW5lclNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwibnVtIiwidGl0bGVzIiwiYWxsIiwicHJvZHVjdEl0ZW1MaXN0IiwiYmFza2V0Rm9ybVZhbGlkYXRvciIsImJhc2tldCIsInBvcHVwQ2FyZExpc3QiLCJwb3B1cFdpdGhDaG9vc2VQYXkiLCJwb3B1cFBpY2t1cExpc3QiLCJwb3B1cFdpdGhDaG9vc2VBZGRyZXNzIiwicGlja3VwRWxlbWVudCIsInBvcHVwUGlja3VwUG9pbnRMaXN0IiwicGlja3VwUG9pbnRFbGVtZW50IiwiaXRlbUxpc3QiLCJkZWxpdmVyeUxpc3RJdGVtIiwiZGVsaXZlcnkiXSwic291cmNlUm9vdCI6IiJ9