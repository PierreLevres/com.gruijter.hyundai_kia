/*
Copyright 2020 - 2021, Robin de Gruijter (gruijter@hotmail.com)

This file is part of com.gruijter.hyundai_kia.

com.gruijter.hyundai_kia is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

com.gruijter.hyundai_kia is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with com.gruijter.hyundai_kia. If not, see <http://www.gnu.org/licenses/>.
*/

'use strict';

const GenericDriver = require('../generic_driver.js');

const driverSpecifics = {
	driverId: 'uvo',
	deviceCapabilities: [
		'target_temperature',

		'refresh_status',
		'locked',
		'defrost',
		'climate_control',

		'last_refresh',
		'engine',
		'closed_locked',
		'location',
		'distance',
		'etth',
		'speed',
		'range',

		'charger',
		'charging',
		'odometer',
		'alarm_tire_pressure',
		'alarm_battery',

		'measure_battery.EV',
		'measure_battery.12V',

		'latitude',
		'longitude',
	],
};

class UvoDriver extends GenericDriver {
	onInit() {
		// this.log('driver onInit');
		this.ds = driverSpecifics;
		this.onDriverInit();
	}
}

module.exports = UvoDriver;
