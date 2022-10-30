function volume(val) {
    document.getElementById("respawn30").volume = val / 100;
    document.getElementById("respawn25").volume = val / 100;
    document.getElementById("respawn20").volume = val / 100;
    document.getElementById("respawn15").volume = val / 100;
    document.getElementById("respawn10").volume = val / 2 / 100; // Rajout du /2 pour avoir à peux pres le même volume que le reste

    let valume_value = document.getElementById("volume_value");
    valume_value.innerHTML = val;
}