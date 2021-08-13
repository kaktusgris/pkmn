import React, { useState } from 'react';
import Button from '../../common/button';
import './rules.scss'
import RuleText from './ruletext';

const Rules = () => {
    const [format, setFormat] = useState('');
    const formats = ['WotC', 'EX', 'DP', 'HGSS', 'BW', 'XY', 'SM', 'SWSH'];

    return (
        <div className='rules card'>
            <h1>Rules</h1>
            <div>
                {formats.map(f =>
                    <Button key={f} title={f} onClick={() => setFormat(f)} />
                )}
            </div>
            <RuleText format={format} />
        </div>
    );
}

export default Rules;