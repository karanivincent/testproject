import { render, screen } from "@testing-library/svelte";
import SearchBar from './SearchBar.svelte'
import userEvent from "@testing-library/user-event";
// import users from '../../mock/users.json';

describe('Search Bar', () => {

    const users = [{
        "id": "ID874320",
        "first_name": "Adriano",
        "last_name": "Alfaro",
        "active": "TRUE",
        "relationship": "member",
        "avatar": "Adriano_Alfaro.jpg",
        "membership": "GOLD",
        "phone": "+491711234567",
        "email_address": "Adriano.Alfaro@gmail.com"
    },
    {
        "id": "ID874321",
        "first_name": "Amy-Louise",
        "last_name": "Klein",
        "active": "FALSE",
        "relationship": "staff",
        "avatar": "Amy-Louise_Klein.jpg",
        "membership": "",
        "phone": "+491711234568",
        "email_address": "Amy-Louise.Klein@gmail.com"
    }];

    it(' enables search button when input > 3 ', async () => {
        render(SearchBar, {
            props: { allUsers: users }
        });
        const searchButton = screen.getByRole("button", { name: 'search-button' })
        const searchInput = screen.getByLabelText('Search');
        await userEvent.type(searchInput, 'ad');
        expect(searchButton).toBeDisabled();
        await userEvent.type(searchInput, 'adr');
        expect(searchButton).toBeEnabled();
    });
})