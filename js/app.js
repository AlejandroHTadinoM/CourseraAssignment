(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var ToBuyCtrl = this;

		ToBuyCtrl.buyItems = ShoppingListCheckOffService.getBuyItems();

		ToBuyCtrl.CheckItem = function () {
			ShoppingListCheckOffService.CheckItem(ToBuyCtrl.itemName, ToBuyCtrl.quantity, ToBuyCtrl.index);
		};
	};

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var AlreadyBoughtCtrl = this;

		AlreadyBoughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
	};

	function ShoppingListCheckOffService() {
		var service = this;

		var buyItems = [
			{name: 'Coockies', quantity: '10 bags'},
			{name: 'Cereal', quantity: '4 boxes'},
			{name: 'Orange juice', quantity: '4 botles'},
			{name: 'Soda drinks', quantity: '2 botles'},
			{name: 'Cerael bars', quantity: '10 bags'},
			{name: 'Milk', quantity: '4 botles'}
		];

		var boughtItems = [];

		service.CheckItem = function (itemName, quantity, index) {
			var item = {
				name: itemName,
				quantity: quantity
			};
			boughtItems.push(item);
			buyItems.splice(index, 1);	
		};

		service.getBuyItems = function () {
			return buyItems;
		};

		service.getBoughtItems = function () {
			return boughtItems;
		};
	};
})();