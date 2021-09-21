class Github {
    constructor() {
        this.client_id = '79345484ef9ad61223c3';
        this.client_secret = '6bea586e7e4bc6a66701e6ae2ae9f37d0e4fc1bf';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return { profile }
    }
}