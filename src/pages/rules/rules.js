import React, { useState } from 'react';
import './rules.scss'
import RuleText from './ruletext';

const Rules = () => {
    const [format, setFormat] = useState('');
    const formats = ['WotC', 'EX', 'DP', 'HGSS', 'BW', 'XY', 'SM', 'SWSH'];

    const RuleTab = ({ name }) => (
        <div
            className='btn btn-primary m-1'
            onClick={() => setFormat(name)}
        >
            {name}
        </div>
    );

    return (
        <div className='rules card'>
            <h1>Rules</h1>
            <div>
                {formats.map(f => <RuleTab key={f} name={f} />)}
            </div>
            <RuleText format={format} />
        </div>
    );
}

export default Rules;