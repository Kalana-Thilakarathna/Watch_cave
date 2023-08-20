import react from 'react';
import SideBar from '../SideBar';
import {Movies} from "../../Data/MovieData";
import Table from '../../../Components/Table';

function MoviesList(){
    return(
        <SideBar>
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">
                         Movies List
                    </h2>
                    <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded">
                    Delete All
                    </button>

                </div>
                <Table data={Movies} admin={true}/>
            </div>

        </SideBar>

    )
}
export default MoviesList;