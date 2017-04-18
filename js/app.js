//App Cuenta con AngularJS * Por Laura Castrillo Bastos (17/04/2017) 
var app = angular.module('cuenta', []);
app.controller('cuentaCtrl', function($scope){
	$scope.contador = 0; //inicializar contador
	$scope.registro = 0; //inicializar el valor del histórico
	$scope.lista = []; //array con los pares fecha-valor para el histórico
	$scope.actualizaRegistro = function() {
		$scope.CurrentDate = new Date(); 
		$scope.lista.push({fecha: $scope.CurrentDate, valor: $scope.registro}); //añadir par fecha-valor al array
		$scope.lista.sort(function(a, b){
			return new Date(b.fecha) - new Date(a.fecha);//ordenar el array por fecha de más a menos reciente
		});;
	}
	$scope.borraRegistro = function() {
		$scope.lista.length = 0; //limpiar array
	}
});