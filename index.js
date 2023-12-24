document.addEventListener('DOMContentLoaded', () => {
    const fetchUsersBtn = document.getElementById('fetchUsersBtn');
    const usersContainer = document.getElementById('usersContainer');

    fetchUsersBtn.addEventListener('click', () => {
        fetchUserData();
    });

    function fetchUserData() {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(data => {
                displayUserData(data.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }

    function displayUserData(users) {
        usersContainer.innerHTML = ''; // Clear previous data

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            const avatar = document.createElement('img');
            avatar.src = user.avatar;
            avatar.alt = `${user.first_name} ${user.last_name}'s avatar`;
            avatar.classList.add('avatar');

            const userName = document.createElement('p');
            userName.textContent = `${user.first_name} ${user.last_name}`;
            userName.classList.add('user-name');

            const userEmail = document.createElement('p');
            userEmail.textContent = user.email;
            userEmail.classList.add('user-email');

            userCard.appendChild(avatar);
            userCard.appendChild(userName);
            userCard.appendChild(userEmail);

            usersContainer.appendChild(userCard);
        });
    }
});
