import React, { useState, useEffect } from 'react'
import * as Realm from "realm-web";
import  { useNavigate }  from 'react-router-dom'
import BoxContainer from '../../components/BoxContainer';
import NavSideBar from '../../components/NavSideBar'
// import Image from '../assets/img/man.png'

const Profile = () => {
    const [signups, setSignups] = useState("");
    const { query } = useNavigate();

    useEffect(async () => {
        if (query.term) {
          // add your Realm App Id to the .env.local file
            const REALM_APP_ID = process.env.REALM_APP_ID;
            const app = new Realm.App({ id: REALM_APP_ID });
            // const credentials = Realm.Credentials.anonymous();
            try {
                // const user = await app.logIn(credentials);
                const searchSignups = await user.functions.searchSignups(query.term);
                setSignups(() => searchSignups);
            } catch (error) {
                console.error(error);
            }
        }
        }, [query]);
    return (
        <div>
            <NavSideBar />
            <BoxContainer>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h3 className="h3">Search Results</h3>
                    </div>
                    <div className="row">
                    <div className="col">
                        <div className="grid-photo">
                            <main>
                            <div className="album py-5 bg-light">
                                <div className="container my-6">
                                    <Signup 
                                        player="Player Found"
                                        playerCount={`${signups.length} Signups`}
                                    />
                                    <Signups signups={signups} />
                                </div>
                            </div>
                            </main>
                        </div>
                    </div>
                </div>
                </main>
            </BoxContainer>
        </div>
            
    )
}

export default Profile