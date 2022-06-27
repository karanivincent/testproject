import { render, screen } from "@testing-library/svelte";
import ResultItem from './ResultItem.svelte'

describe('ResultItem', () => {
    const user = {
        "id": "ID874320",
        "first_name": "Adriano",
        "last_name": "Alfaro",
        "active": "TRUE",
        "relationship": "member",
        "avatar": "Adriano_Alfaro.jpg",
        "membership": "GOLD",
        "phone": "+491711234567",
        "email_address": "Adriano.Alfaro@gmail.com"
    };

    it('shows user details when rendered', () => {
        render(ResultItem, { props: { id: user.id, name: user.first_name, photo: user.avatar, membership: user.membership, active: user.active } });
        expect(screen.getByText(user.first_name)).toBeInTheDocument();
        expect(screen.getByText(user.id)).toBeInTheDocument();
    });
})