import React, { PureComponent } from 'react'
import { View } from 'react-native'
import Logo from '../components/logo';

class Configuracion extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Logo />
            </View>
        )
    }
}

export default Configuracion