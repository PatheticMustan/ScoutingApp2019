import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function TabBarIcon(props) {
    return (
        <FontAwesome
            name = {props.name}
            size = {props.size || 26}
            color = {props.color}
        />
    );
}