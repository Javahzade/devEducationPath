import React from 'react'
import { View, Text } from 'react-native'
import {SvgLogOutIcon} from '../../src/img/svgIcons';
import {svgPath} from '../../services/utils/svgPaths';

const MainHeader = () => {
    return(
        <View style={{width: '100%', height: 60, justifyContent: 'center', zIndex: 1}}>
            <SvgLogOutIcon path={svgPath.logOutIcon} />
        </View>
    )
}
export default MainHeader;
