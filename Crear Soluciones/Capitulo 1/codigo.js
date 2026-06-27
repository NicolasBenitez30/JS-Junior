let dineroCofla = prompt("¿Cuanto dinero tienes Cofla?");
let dineroRoberto = prompt("¿Cuanto dinero tienes Roberto?");
let dineroPedro = prompt("¿Cuanto dinero tienes Cofla?");

// dineroCofla = parseInt(dineroCofla); - Declaro la variable como dato entero (INT).

//      ------DINERO COFLA------
if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla Comprate el helado de agua");
    alert(`Tu Vuelto es: ${dineroCofla - 0.6}`);
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla Comprate el helado de crema");
    alert(`Tu Vuelto es: ${dineroCofla - 1}`);
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("CoflaComprate el heladix");
    alert(`Tu Vuelto es: ${dineroCofla - 1.6}`);
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla Comprate el heladovich");
    alert(`Tu Vuelto es: ${dineroCofla - 1.7}`);
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla Comprate el helardo");
    alert(`Tu Vuelto es: ${dineroCofla - 1.8}`);
}
else if (dineroCofla >= 2.9) {
    alert("Cofla tenes dos opciones: helado con confites o el pote de 1/4kg");
    alert(`Tu Vuelto es: ${dineroCofla - 2.9}`);
}
else {
    alert("Lo siento Cofla, no cuentas con el dinero suficiente");
}
//      ------DINERO ROBERTO------
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto Comprate el helado de agua");
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto Comprate el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto Comprate el heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto Comprate el heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto Comprate el helardo");
}
else if (dineroRoberto >= 2.9) {
    alert("Roberto tenes dos opciones: helado con confites o el pote de 1/4kg");
}
else {
    alert("Lo siento Roberto, no cuentas con el dinero suficiente");
}
//      ------DINERO PEDRO------
if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("PedroComprate el helado de agua");
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro Comprate el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro Comprate el heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro Comprate el heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro Comprate el helardo");
}
else if (dineroPedro >= 2.9) {
    alert("Pedro tenes dos opciones: helado con confites o el pote de 1/4kg");
}
else {
    alert("Lo siento Pedro, no cuentas con el dinero suficiente");
}