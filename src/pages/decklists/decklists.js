import React, { useState } from "react";
import Button from "../../common/button";
import Decklist from "./decklist";

const Decklists = () => {
    const [format, setFormat] = useState('');
    const formats = ['DP', 'HGSS', 'BW', 'XY'];

    return (
        <div className="decklists card">
            <h1>Decklists</h1>
            <div>
                {formats.map(f => <Button key={f} title={f} onClick={() => setFormat(f)} />)}
            </div>
            <Decklist format={format} />
        </div>
    );
}

export default Decklists;