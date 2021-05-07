import {ProfileHeader,
        AvatarHeader,
        InfoProfile,
        H3Profile,
        ParProfile,
        ButtonWrapperProfile,
        EditProfileButton,
        CreateNewRecipe,
        FollowersWrapper,
} from './layouts/profilelayout'

import Card from '../components/Card/index';

function ProfilePage() {
    return(
        <div>
            <ProfileHeader>
                <AvatarHeader></AvatarHeader>
                <InfoProfile>
                    <H3Profile>Jana Healthfood</H3Profile>
                    <ParProfile>Chef in The Ultimate Kitchen @theUltimateKitchen 
Food makes the soul happy.</ParProfile>
                    <ButtonWrapperProfile>
                        <EditProfileButton></EditProfileButton>
                        <CreateNewRecipe></CreateNewRecipe>
                    </ButtonWrapperProfile>
                    <FollowersWrapper></FollowersWrapper>
                </InfoProfile>
            </ProfileHeader>
            <Card />
        </div>
    )
};

export default ProfilePage;