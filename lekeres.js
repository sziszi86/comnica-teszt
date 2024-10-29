async function fetchUsersAndColors() {
    try {
        // Felhasználók lekérése
        const usersResponse = await fetch('https://api.example.com/users');
        const users = await usersResponse.json();

        // Színek lekérése
        const colorsResponse = await fetch('https://api.example.com/colors');
        const colors = await colorsResponse.json();

        // Véletlenszerű színt rendel minden felhasználóhoz
        const result = users.map((user, index) => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            return { ...user, color: randomColor };
        });

        console.log(result); // Eredmény megjelenítése a console-on
    } catch (error) {
        console.error('Hiba történt:', error); // Hibaüzenet megjelenítése a console-on
    } finally {
        console.log('Lekérdezés befejezve'); // Folyamat befejezésének jelzése a console-on
    }
}

fetchUsersAndColors();