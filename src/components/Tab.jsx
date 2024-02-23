import React from 'react'
import { snapshot } from 'valtio'
import state from '../store'

const Tab = (
    { tab, isFilterTab, isActiveTab, handleClick }
) => {

    const activeStyles = isFilterTab && isActiveTab ? {
        backgroundColor: snapshot.color,
        opactity: 0.5

    } : {
        backgroundColor: 'transparent',
        opactity: 1
    }
    return (
        <div
            key={tab.name}
            className={`tab-btn ${isFilterTab ? 'rounded-full glassmorhism' : 'rounded-4'} `}
            onClick={handleClick}
            style={activeStyles}
        >
            <img
                src={tab.icon}
                alt={tab.name}

                className={` ${isFilterTab ? 'w-2/3 h-2/3' : 'h-11/12 w-11/12 object-contain'}`} />
        </div>
    )
}

export default Tab