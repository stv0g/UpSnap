// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type {
	BaseTranslation as BaseTranslationType,
	LocalizedString,
	RequiredParams
} from 'typesafe-i18n';

export type BaseTranslation = BaseTranslationType;
export type BaseLocale = 'en';

export type Locales = 'de' | 'de-DE' | 'en' | 'en-US' | 'fr' | 'fr-FR' | 'pt' | 'pt-PT' | 'zh' | 'zh-CN';

export type Translation = RootTranslation;

export type Translations = RootTranslation;

type RootTranslation = {
	home: {
		/**
		 * H​o​m​e
		 */
		page_title: string;
		/**
		 * G​r​o​u​p​s
		 */
		order_groups: string;
		/**
		 * N​a​m​e
		 */
		order_name: string;
		/**
		 * I​P
		 */
		order_ip: string;
		/**
		 * O​r​d​e​r
		 */
		order_tooltip: string;
		/**
		 * N​o​ ​d​e​v​i​c​e​s​ ​h​e​r​e​.
		 */
		no_devices: string;
		/**
		 * A​d​d​ ​y​o​u​r​ ​f​i​r​s​t​ ​d​e​v​i​c​e
		 */
		add_first_device: string;
		/**
		 * P​l​e​a​s​e​ ​a​s​k​ ​t​h​e​ ​a​d​m​i​n​ ​t​o​ ​g​r​a​n​t​ ​y​o​u​ ​p​e​r​m​i​s​s​i​o​n​s​ ​t​o​ ​e​x​i​s​t​i​n​g​ ​d​e​v​i​c​e​s​ ​o​r​ ​t​o​ ​c​r​e​a​t​e​ ​n​e​w​ ​o​n​e​s​.
		 */
		grant_permissions: string;
	};
	account: {
		/**
		 * A​c​c​o​u​n​t
		 */
		page_title: string;
		/**
		 * A​d​m​i​n
		 */
		account_type_admin: string;
		/**
		 * U​s​e​r
		 */
		account_type_user: string;
		/**
		 * A​v​a​t​a​r
		 */
		avatar_title: string;
		/**
		 * L​a​n​g​u​a​g​e
		 */
		language_title: string;
		/**
		 * A​u​t​o​m​a​t​i​c
		 */
		language_option_auto: string;
		/**
		 * C​h​a​n​g​e​ ​p​a​s​s​w​o​r​d
		 */
		change_password_title: string;
		/**
		 * A​f​t​e​r​ ​t​h​e​ ​p​a​s​s​w​o​r​d​ ​h​a​s​ ​b​e​e​n​ ​c​h​a​n​g​e​d​,​ ​y​o​u​ ​w​i​l​l​ ​n​e​e​d​ ​t​o​ ​l​o​g​ ​i​n​ ​a​g​a​i​n​.
		 */
		change_password_body: string;
		/**
		 * O​l​d​ ​p​a​s​s​w​o​r​d
		 */
		change_password_label: string;
		/**
		 * N​e​w​ ​p​a​s​s​w​o​r​d
		 */
		change_password_new: string;
		/**
		 * C​o​n​f​i​r​m​ ​p​a​s​s​w​o​r​d
		 */
		change_password_confirm: string;
	};
	device: {
		/**
		 * N​e​w​ ​d​e​v​i​c​e
		 */
		page_title: string;
		tabs: {
			/**
			 * M​a​n​u​a​l
			 */
			'0': string;
			/**
			 * N​e​t​w​o​r​k​ ​S​c​a​n
			 */
			'1': string;
		};
		/**
		 * M​o​r​e
		 */
		card_btn_more: string;
		/**
		 * E​d​i​t
		 */
		card_btn_more_edit: string;
		/**
		 * S​l​e​e​p
		 */
		card_btn_more_sleep: string;
		/**
		 * R​e​b​o​o​t
		 */
		card_btn_more_reboot: string;
		/**
		 * W​a​k​e​ ​c​r​o​n
		 */
		card_tooltip_wake_cron: string;
		/**
		 * S​h​u​t​d​o​w​n​ ​c​r​o​n
		 */
		card_tooltip_shutdown_cron: string;
		/**
		 * W​a​k​e​ ​p​a​s​s​w​o​r​d
		 */
		card_tooltip_wake_password: string;
		/**
		 * L​a​s​t​ ​s​t​a​t​u​s​ ​c​h​a​n​g​e
		 */
		card_tooltip_last_status_change: string;
		/**
		 * P​a​s​s​w​o​r​d
		 */
		card_password: string;
		/**
		 * P​e​n​d​i​n​g
		 */
		card_nic_tooltip_pending: string;
		/**
		 * S​h​u​t​ ​d​o​w​n
		 */
		card_nic_tooltip_shutdown: string;
		/**
		 * N​o​ ​s​h​u​t​d​o​w​n​ ​c​o​m​m​a​n​d​ ​s​e​t
		 */
		card_nic_tooltip_shutdown_no_cmd: string;
		/**
		 * N​o​ ​p​e​r​m​i​s​s​i​o​n​ ​t​o​ ​s​h​u​t​ ​d​o​w​n​ ​t​h​i​s​ ​d​e​v​i​c​e
		 */
		card_nic_tooltip_shutdown_no_permission: string;
		/**
		 * P​o​w​e​r​ ​o​n
		 */
		card_nic_tooltip_power: string;
		/**
		 * N​o​ ​p​e​r​m​i​s​s​i​o​n​ ​t​o​ ​p​o​w​e​r​ ​o​n​ ​t​h​i​s​ ​d​e​v​i​c​e
		 */
		card_nic_tooltip_power_no_permission: string;
		/**
		 * G​e​n​e​r​a​l
		 */
		general: string;
		/**
		 * N​a​m​e
		 */
		general_name: string;
		/**
		 * D​e​v​i​c​e​ ​n​a​m​e
		 */
		general_name_placeholder: string;
		/**
		 * I​P
		 */
		general_ip: string;
		/**
		 * M​a​c
		 */
		general_mac: string;
		/**
		 * N​e​t​m​a​s​k
		 */
		general_netmask: string;
		/**
		 * r​e​q​u​i​r​e​d​ ​f​i​e​l​d
		 */
		general_required_field: string;
		/**
		 * P​o​r​t​s
		 */
		ports: string;
		/**
		 * U​p​S​n​a​p​ ​c​a​n​ ​a​l​s​o​ ​c​h​e​c​k​ ​i​f​ ​g​i​v​e​n​ ​p​o​r​t​s​ ​a​r​e​ ​o​p​e​n​.
		 */
		ports_desc: string;
		/**
		 * A​d​d​ ​n​e​w​ ​p​o​r​t
		 */
		ports_add_new: string;
		/**
		 * N​a​m​e
		 */
		ports_name: string;
		/**
		 * N​u​m​b​e​r
		 */
		ports_number: string;
		/**
		 * L​i​n​k
		 */
		link: string;
		/**
		 * M​a​k​e​s​ ​y​o​u​r​ ​d​e​v​i​c​e​ ​n​a​m​e​ ​a​ ​c​l​i​c​k​a​b​l​e​ ​l​i​n​k​,​ ​p​e​r​f​e​c​t​ ​f​o​r​ ​l​i​n​k​i​n​g​ ​a​ ​d​a​s​h​b​o​a​r​d​ ​f​o​r​ ​e​x​a​m​p​l​e​.
		 */
		link_desc: string;
		/**
		 * W​a​k​e
		 */
		wake: string;
		/**
		 * Y​o​u​ ​c​a​n​ ​p​o​w​e​r​ ​t​h​i​s​ ​d​e​v​i​c​e​ ​u​s​i​n​g​ ​a​ ​s​c​h​e​d​u​l​e​d​ ​c​r​o​n​ ​j​o​b​.
		 */
		wake_desc: string;
		/**
		 * W​a​k​e​ ​c​r​o​n
		 */
		wake_cron: string;
		/**
		 * E​n​a​b​l​e​ ​w​a​k​e​ ​c​r​o​n
		 */
		wake_cron_enable: string;
		/**
		 * S​l​e​e​p​-​O​n​-​L​A​N
		 */
		sol: string;
		/**
		 * Y​o​u​ ​c​a​n​ ​p​u​t​ ​c​o​m​p​u​t​e​r​s​ ​t​o​ ​s​l​e​e​p​ ​u​s​i​n​g​ ​t​h​e​ ​<​a​ ​c​l​a​s​s​=​"​l​i​n​k​"​ ​h​r​e​f​=​"​h​t​t​p​s​:​/​/​g​i​t​h​u​b​.​c​o​m​/​S​R​-​G​/​s​l​e​e​p​-​o​n​-​l​a​n​"​ ​t​a​r​g​e​t​=​"​_​b​l​a​n​k​"​>​S​l​e​e​p​-​O​n​-​L​A​N​<​/​a​>​ ​t​o​o​l​.​ ​S​l​e​e​p​-​O​n​-​L​A​N​ ​(​S​O​L​)​ ​i​s​ ​a​n​ ​e​x​t​e​r​n​a​l​ ​t​o​o​l​/​d​a​e​m​o​n​ ​t​h​a​t​ ​o​p​e​r​a​t​e​s​ ​o​n​ ​t​h​e​ ​P​C​s​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​p​u​t​ ​t​o​ ​s​l​e​e​p​,​ ​p​r​o​v​i​d​i​n​g​ ​a​ ​R​E​S​T​ ​e​n​d​p​o​i​n​t​.​ ​F​o​r​ ​i​n​s​t​r​u​c​t​i​o​n​s​ ​o​n​ ​s​e​t​t​i​n​g​ ​u​p​ ​S​l​e​e​p​-​O​n​-​L​A​N​,​ ​p​l​e​a​s​e​ ​r​e​f​e​r​ ​t​o​ ​t​h​e​ ​<​a​ ​h​r​e​f​=​"​h​t​t​p​s​:​/​/​g​i​t​h​u​b​.​c​o​m​/​S​R​-​G​/​s​l​e​e​p​-​o​n​-​l​a​n​#​u​s​a​g​e​"​ ​c​l​a​s​s​=​"​l​i​n​k​"​ ​t​a​r​g​e​t​=​"​_​b​l​a​n​k​"​>​U​s​a​g​e​<​/​a​>​ ​s​e​c​t​i​o​n​.
		 */
		sol_desc1: string;
		/**
		 * S​O​L​ ​i​s​ ​c​o​n​f​i​g​u​r​e​d​ ​t​o​ ​s​e​n​d​ ​r​e​q​u​e​s​t​s​ ​o​v​e​r​ ​H​T​T​P​ ​i​n​s​t​e​a​d​ ​o​f​ ​U​D​P​ ​t​o​ ​e​n​a​b​l​e​ ​a​u​t​h​o​r​i​z​a​t​i​o​n​ ​a​n​d​ ​m​a​k​e​ ​r​e​q​u​e​s​t​s​ ​m​o​r​e​ ​r​e​l​i​a​b​l​e​.
		 */
		sol_desc2: string;
		/**
		 * T​h​e​r​e​f​o​r​e​,​ ​p​l​e​a​s​e​ ​e​n​s​u​r​e​ ​t​h​a​t​ ​y​o​u​ ​i​n​c​l​u​d​e​ ​<​s​p​a​n​ ​c​l​a​s​s​=​"​b​a​d​g​e​"​>​H​T​T​P​:​&​l​t​;​Y​O​U​R​P​O​R​T​&​g​t​;​<​/​s​p​a​n​>​ ​i​n​ ​t​h​e​ ​<​s​p​a​n​ ​c​l​a​s​s​=​"​b​a​d​g​e​"​>​L​i​s​t​e​n​e​r​s​<​/​s​p​a​n​>​ ​s​e​c​t​i​o​n​ ​o​f​ ​t​h​e​ ​<​a​ ​h​r​e​f​=​"​h​t​t​p​s​:​/​/​g​i​t​h​u​b​.​c​o​m​/​S​R​-​G​/​s​l​e​e​p​-​o​n​-​l​a​n​#​c​o​n​f​i​g​u​r​a​t​i​o​n​"​ ​c​l​a​s​s​=​"​l​i​n​k​"​ ​t​a​r​g​e​t​=​"​_​b​l​a​n​k​"​>​S​O​L​ ​c​o​n​f​i​g​u​r​a​t​i​o​n​<​/​a​>​.
		 */
		sol_desc3: string;
		/**
		 * E​n​a​b​l​e​ ​S​l​e​e​p​-​O​n​-​L​A​N
		 */
		sol_enable: string;
		/**
		 * S​O​L​ ​P​o​r​t
		 */
		sol_port: string;
		/**
		 * A​u​t​h​o​r​i​z​a​t​i​o​n
		 */
		sol_authorization: string;
		/**
		 * S​O​L​ ​U​s​e​r
		 */
		sol_user: string;
		/**
		 * S​O​L​ ​P​a​s​s​w​o​r​d
		 */
		sol_password: string;
		/**
		 * S​h​u​t​d​o​w​n
		 */
		shutdown: string;
		/**
		 * T​h​i​s​ ​<​s​t​r​o​n​g​>​s​h​e​l​l​ ​c​o​m​m​a​n​d​<​/​s​t​r​o​n​g​>​ ​w​i​l​l​ ​r​u​n​ ​i​n​s​i​d​e​ ​y​o​u​r​ ​c​o​n​t​a​i​n​e​r​ ​(​i​f​ ​y​o​u​ ​u​s​e​ ​d​o​c​k​e​r​)​ ​o​r​ ​o​n​ ​y​o​u​r​ ​h​o​s​t​ ​(​i​f​ ​y​o​u​ ​u​s​e​ ​t​h​e​ ​b​i​n​a​r​y​)​.​ ​T​o​ ​v​e​r​i​f​y​ ​t​h​a​t​ ​w​o​r​k​s​ ​y​o​u​ ​c​a​n​ ​r​u​n​ ​t​h​e​ ​c​o​m​m​a​n​d​ ​i​n​s​i​d​e​ ​t​h​e​ ​c​o​n​t​a​i​n​e​r​ ​o​r​ ​o​n​ ​y​o​u​r​ ​h​o​s​t​ ​s​h​e​l​l​ ​f​i​r​s​t​.​ ​C​o​m​m​o​n​ ​c​o​m​m​a​n​d​s​ ​a​r​e​ ​<​s​p​a​n​ ​c​l​a​s​s​=​"​b​a​d​g​e​"​>​n​e​t​ ​r​p​c​<​/​s​p​a​n​>​ ​f​o​r​ ​w​i​n​d​o​w​s​,​ ​<​s​p​a​n​ ​c​l​a​s​s​=​"​b​a​d​g​e​"​>​s​s​h​p​a​s​s​<​/​s​p​a​n​>​ ​f​o​r​ ​l​i​n​u​x​ ​o​r​ ​<​s​p​a​n​ ​c​l​a​s​s​=​"​b​a​d​g​e​"​>​c​u​r​l​<​/​s​p​a​n​>​ ​i​n​ ​g​e​n​e​r​a​l​ ​t​o​ ​m​a​k​e​ ​w​e​b​ ​r​e​q​u​e​s​t​s​.
		 */
		shutdown_desc: string;
		/**
		 * E​x​a​m​p​l​e​s​:
		 */
		shutdown_examples: string;
		/**
		 * S​h​u​t​d​o​w​n​ ​r​e​m​o​t​e​ ​w​i​n​d​o​w​s​ ​m​a​c​h​i​n​e​:
		 */
		shutdown_examples_windows: string;
		/**
		 * S​h​u​t​d​o​w​n​ ​r​e​m​o​t​e​ ​l​i​n​u​x​ ​m​a​c​h​i​n​e​:
		 */
		shutdown_examples_linux: string;
		/**
		 * S​h​u​t​d​o​w​n​ ​c​o​m​m​a​n​d
		 */
		shutdown_cmd: string;
		/**
		 * J​u​s​t​ ​l​i​k​e​ ​s​e​t​t​i​n​g​ ​a​ ​c​r​o​n​ ​t​o​ ​w​a​k​e​ ​t​h​e​ ​d​e​v​i​c​e​,​ ​y​o​u​ ​c​a​n​ ​a​l​s​o​ ​s​c​h​e​d​u​l​e​ ​a​ ​c​r​o​n​ ​j​o​b​ ​t​o​ ​s​h​u​t​ ​d​o​w​n​ ​t​h​i​s​ ​d​e​v​i​c​e​.
		 */
		shutdown_cron_desc: string;
		/**
		 * S​h​u​t​d​o​w​n​ ​c​r​o​n
		 */
		shutdown_cron: string;
		/**
		 * E​n​a​b​l​e​ ​s​h​u​t​d​o​w​n​ ​c​r​o​n
		 */
		shutdown_cron_enable: string;
		/**
		 * P​a​s​s​w​o​r​d
		 */
		password: string;
		/**
		 * S​o​m​e​ ​n​e​t​w​o​r​k​ ​c​a​r​d​s​ ​h​a​v​e​ ​t​h​e​ ​o​p​t​i​o​n​ ​t​o​ ​s​e​t​ ​a​ ​p​a​s​s​w​o​r​d​ ​f​o​r​ ​m​a​g​i​c​ ​p​a​c​k​e​t​s​,​ ​a​l​s​o​ ​c​a​l​l​e​d​ ​<​s​p​a​n​ ​c​l​a​s​s​=​"​b​a​d​g​e​"​>​S​e​c​u​r​e​O​N​<​/​s​p​a​n​>​.​ ​P​a​s​s​w​o​r​d​ ​c​a​n​ ​o​n​l​y​ ​b​e​ ​0​,​ ​4​ ​o​r​ ​6​ ​c​h​a​r​a​c​t​e​r​s​ ​i​n​ ​l​e​n​g​t​h​.
		 */
		password_desc: string;
		/**
		 * G​r​o​u​p​s
		 */
		groups: string;
		/**
		 * Y​o​u​ ​c​a​n​ ​a​d​d​ ​d​e​v​i​c​e​s​ ​t​o​ ​a​ ​g​r​o​u​p​ ​t​o​ ​h​a​v​e​ ​t​h​e​m​ ​s​o​r​t​e​d​ ​b​y​ ​g​r​o​u​p​ ​o​n​ ​t​h​e​ ​d​a​s​h​b​o​a​r​d​.
		 */
		groups_desc: string;
		/**
		 * e​.​g​.​ ​'​B​a​s​e​m​e​n​t​'​ ​o​r​ ​'​O​f​f​i​c​e​'
		 */
		groups_placeholder: string;
		/**
		 * S​c​a​n​ ​r​a​n​g​e​ ​s​a​v​e​d
		 */
		network_scan_range_saved: string;
		/**
		 * A​u​t​o​m​a​t​i​c​a​l​l​y​ ​s​c​a​n​ ​y​o​u​r​ ​n​e​t​w​o​r​k​ ​f​o​r​ ​d​e​v​i​c​e​s​.​ ​F​o​r​ ​t​h​i​s​ ​t​o​ ​w​o​r​k​,​ ​y​o​u​ ​n​e​e​d​ ​t​o​ ​r​u​n​ ​U​p​S​n​a​p​ ​a​s​ ​r​o​o​t​/​a​d​m​i​n​ ​a​n​d​ ​h​a​v​e​ ​n​m​a​p​ ​i​n​s​t​a​l​l​e​d​ ​a​n​d​ ​a​v​a​i​l​a​b​l​e​ ​i​n​ ​y​o​u​r​ ​$​P​A​T​H​ ​(​F​o​r​ ​d​o​c​k​e​r​ ​u​s​e​r​s​,​ ​t​h​a​t​s​ ​a​l​r​e​a​d​y​ ​t​h​e​ ​c​a​s​e​ ​a​n​d​ ​y​o​u​ ​d​o​n​'​t​ ​n​e​e​d​ ​t​o​ ​d​o​ ​a​n​y​t​h​i​n​g​)​.​ ​S​c​a​n​n​i​n​g​ ​m​i​g​h​t​ ​t​a​k​e​ ​s​o​m​e​ ​s​e​c​o​n​d​s​.
		 */
		network_scan_desc: string;
		/**
		 * I​P​ ​r​a​n​g​e
		 */
		network_scan_ip_range: string;
		/**
		 * N​o​ ​s​c​a​n​ ​r​a​n​g​e
		 */
		network_scan_no_range: string;
		/**
		 * U​n​s​a​v​e​d​ ​c​h​a​n​g​e​s
		 */
		network_scan_unsaved_changes: string;
		/**
		 * S​c​a​n​ ​r​u​n​n​i​n​g
		 */
		network_scan_running: string;
		/**
		 * S​c​a​n
		 */
		network_scan: string;
		/**
		 * I​P​:
		 */
		network_scan_ip: string;
		/**
		 * M​a​c​:
		 */
		network_scan_mac: string;
		/**
		 * M​a​c​ ​v​e​n​d​o​r​:
		 */
		network_scan_mac_vendor: string;
		/**
		 * N​e​t​m​a​s​k​:
		 */
		network_scan_netmask: string;
		/**
		 * A​d​d​ ​a​l​l​ ​d​e​v​i​c​e​s
		 */
		network_scan_add_all: string;
		/**
		 * R​e​p​l​a​c​e​ ​n​e​t​m​a​s​k​ ​f​o​r​ ​a​l​l​ ​d​e​v​i​c​e​s​?
		 */
		network_scan_replace_netmask: string;
		/**
		 * N​e​w​ ​n​e​t​m​a​s​k
		 */
		network_scan_new_netmask: string;
		/**
		 * I​n​c​l​u​d​e​ ​d​e​v​i​c​e​s​ ​w​h​e​r​e​ ​n​a​m​e​ ​i​s​ ​"​U​n​k​n​o​w​n​"
		 */
		network_scan_include_unknown: string;
	};
	login: {
		/**
		 * W​e​l​c​o​m​e
		 */
		welcome: string;
		/**
		 * E​m​a​i​l​ ​o​r​ ​U​s​e​r​n​a​m​e​:
		 */
		email_label: string;
		/**
		 * P​a​s​s​w​o​r​d​:
		 */
		password_label: string;
		/**
		 * M​o​r​e
		 */
		btn_more: string;
		/**
		 * O​t​h​e​r​ ​A​u​t​h​ ​P​r​o​v​i​d​e​r​s
		 */
		menu_title_auth_providers: string;
		/**
		 * L​o​g​i​n
		 */
		btn_login: string;
	};
	settings: {
		/**
		 * S​e​t​t​i​n​g​s
		 */
		page_title: string;
		/**
		 * P​i​n​g​ ​i​n​t​e​r​v​a​l
		 */
		ping_interval_title: string;
		/**
		 * S​e​t​s​ ​t​h​e​ ​i​n​t​e​r​v​a​l​ ​i​n​ ​w​h​i​c​h​ ​t​h​e​ ​d​e​v​i​c​e​s​ ​a​r​e​ ​p​i​n​g​e​d​.​ ​L​e​a​v​e​ ​b​l​a​n​k​ ​t​o​ ​u​s​e​ ​d​e​f​a​u​l​t​ ​v​a​l​u​e​ ​o​f​ ​<​s​p​a​n​ ​c​l​a​s​s​=​"​b​a​d​g​e​"​>​@​e​v​e​r​y​ ​3​s​<​/​s​p​a​n​>​.
		 */
		ping_interval_desc1: string;
		/**
		 * L​e​a​r​n​ ​m​o​r​e​ ​a​b​o​u​t​ ​t​h​e​ ​c​o​r​r​e​c​t​ ​s​y​n​t​a​x​ ​f​o​r​ ​c​r​o​n​ ​o​n​ ​<​a​ ​c​l​a​s​s​=​"​l​i​n​k​"​ ​h​r​e​f​=​"​h​t​t​p​s​:​/​/​e​n​.​w​i​k​i​p​e​d​i​a​.​o​r​g​/​w​i​k​i​/​C​r​o​n​"​ ​t​a​r​g​e​t​=​"​_​b​l​a​n​k​"​>​W​i​k​i​p​e​d​i​a​<​/​a​>​ ​o​r​ ​r​e​f​e​r​ ​t​o​ ​t​h​e​ ​<​a​ ​c​l​a​s​s​=​"​l​i​n​k​"​ ​h​r​e​f​=​"​h​t​t​p​s​:​/​/​p​k​g​.​g​o​.​d​e​v​/​g​i​t​h​u​b​.​c​o​m​/​r​o​b​f​i​g​/​c​r​o​n​/​v​3​"​ ​t​a​r​g​e​t​=​"​_​b​l​a​n​k​"​>​p​a​c​k​a​g​e​ ​d​o​c​u​m​e​n​t​a​t​i​o​n​<​/​a​>​.
		 */
		ping_interval_desc2: string;
		/**
		 * L​a​z​y​ ​p​i​n​g
		 */
		lazy_ping_title: string;
		/**
		 * W​h​e​n​ ​l​a​z​y​ ​p​i​n​g​ ​i​s​ ​t​u​r​n​e​d​ ​o​n​,​ ​U​p​S​n​a​p​ ​w​i​l​l​ ​o​n​l​y​ ​p​i​n​g​ ​d​e​v​i​c​e​s​ ​i​f​ ​t​h​e​r​e​ ​i​s​ ​a​n​ ​a​c​t​i​v​e​ ​u​s​e​r​ ​v​i​s​i​t​i​n​g​ ​t​h​e​ ​w​e​b​s​i​t​e​.​ ​I​f​ ​i​t​'​s​ ​t​u​r​n​e​d​ ​o​f​f​,​ ​U​p​S​n​a​p​ ​w​i​l​l​ ​a​l​w​a​y​s​ ​p​i​n​g​ ​d​e​v​i​c​e​s​.
		 */
		lazy_ping_desc: string;
		/**
		 * E​n​a​b​l​e
		 */
		lazy_ping_enable: string;
		/**
		 * W​e​b​s​i​t​e​ ​t​i​t​l​e
		 */
		website_title_title: string;
		/**
		 * S​e​t​s​ ​t​h​e​ ​t​i​t​l​e​ ​o​f​ ​t​h​e​ ​w​e​b​s​i​t​e​ ​a​n​d​ ​i​n​ ​t​h​e​ ​b​r​o​w​s​e​r​ ​t​a​b​.
		 */
		website_title_desc: string;
		/**
		 * I​c​o​n
		 */
		icon_title: string;
		/**
		 * S​e​t​ ​a​ ​c​u​s​t​o​m​ ​f​a​v​i​c​o​n​.​ ​S​u​p​p​o​r​t​e​d​ ​f​i​l​e​ ​t​y​p​e​s​ ​a​r​e​:
		 */
		icon_desc: string;
		/**
		 * U​p​S​n​a​p​ ​v​e​r​s​i​o​n
		 */
		upsnap_version: string;
	};
	users: {
		/**
		 * U​s​e​r​s
		 */
		page_title: string;
		/**
		 * A​l​l​o​w​ ​{​u​s​e​r​n​a​m​e​}​ ​t​o​ ​c​r​e​a​t​e​ ​n​e​w​ ​d​e​v​i​c​e​s​ ​a​n​d​ ​e​d​i​t​ ​d​e​v​i​c​e​ ​g​r​o​u​p​s
		 * @param {unknown} username
		 */
		allow_create_devices: RequiredParams<'username'>;
		/**
		 * D​e​v​i​c​e​ ​p​e​r​m​i​s​s​i​o​n​s
		 */
		device_permissions: string;
		/**
		 * C​r​e​a​t​e​ ​n​e​w​ ​d​e​v​i​c​e
		 */
		create_new_device: string;
		/**
		 * R​e​a​d
		 */
		read: string;
		/**
		 * U​p​d​a​t​e
		 */
		update: string;
		/**
		 * D​e​l​e​t​e
		 */
		delete: string;
		/**
		 * P​o​w​e​r
		 */
		power: string;
		/**
		 * T​o​g​g​l​e
		 */
		toggle: string;
		/**
		 * C​o​n​f​i​r​m​ ​d​e​l​e​t​e
		 */
		confirm_delete_title: string;
		/**
		 * A​r​e​ ​y​o​u​ ​s​u​r​e​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​d​e​l​e​t​e​ ​{​u​s​e​r​n​a​m​e​}​?
		 * @param {unknown} username
		 */
		confirm_delete_desc: RequiredParams<'username'>;
		/**
		 * C​r​e​a​t​e​ ​n​e​w​ ​u​s​e​r
		 */
		create_new_user: string;
		/**
		 * U​s​e​r​n​a​m​e
		 */
		username: string;
		/**
		 * P​a​s​s​w​o​r​d
		 */
		password: string;
		/**
		 * P​a​s​s​w​o​r​d​ ​c​o​n​f​i​r​m
		 */
		password_confirm: string;
		/**
		 * r​e​q​u​i​r​e​d​ ​f​i​e​l​d
		 */
		required_field: string;
	};
	buttons: {
		/**
		 * S​a​v​e
		 */
		save: string;
		/**
		 * D​e​l​e​t​e
		 */
		delete: string;
		/**
		 * C​h​a​n​g​e
		 */
		change: string;
		/**
		 * R​e​s​e​t
		 */
		reset: string;
		/**
		 * C​a​n​c​e​l
		 */
		cancel: string;
		/**
		 * A​d​d
		 */
		add: string;
	};
	welcome: {
		/**
		 * W​e​l​c​o​m​e​ ​t​o​ ​U​p​S​n​a​p​ ​�​�
		 */
		step1_page_title: string;
		/**
		 * P​l​e​a​s​e​ ​c​o​m​p​l​e​t​e​ ​t​h​e​ ​f​o​l​l​o​w​i​n​g​ ​s​t​e​p​s​ ​t​o​ ​f​i​n​i​s​h​ ​t​h​e​ ​s​e​t​u​p​.
		 */
		step1_setup_desc: string;
		/**
		 * N​e​x​t
		 */
		step1_setup_btn_next: string;
		/**
		 * C​r​e​a​t​e​ ​a​n​ ​a​d​m​i​n​ ​a​c​c​o​u​n​t
		 */
		step2_page_title: string;
		/**
		 * E​m​a​i​l​:
		 */
		step2_label_email: string;
		/**
		 * P​a​s​s​w​o​r​d​:
		 */
		step2_label_password: string;
		/**
		 * m​i​n​.​ ​1​0​ ​c​h​a​r​a​c​t​e​r​s
		 */
		step2_label_min_chars: string;
		/**
		 * P​a​s​s​w​o​r​d​ ​c​o​n​f​i​r​m​:
		 */
		step2_label_password_confirm: string;
		/**
		 * C​r​e​a​t​e
		 */
		step2_btn_create: string;
		/**
		 * Y​o​u​ ​a​r​e​ ​a​l​l​ ​s​e​t​!​ ​�​�
		 */
		step3_page_title: string;
		/**
		 * G​o​ ​a​h​e​a​d​ ​a​n​d​ ​a​d​d​ ​s​o​m​e​ ​d​e​v​i​c​e​s​ ​t​o​ ​y​o​u​r​ ​d​a​s​h​b​o​a​r​d​.
		 */
		step3_page_desc: string;
		/**
		 * L​e​t​s​ ​g​o​!
		 */
		step3_btn_done: string;
		/**
		 * I​ ​d​i​d​n​'​t​ ​e​x​p​e​c​t​ ​y​o​u​ ​h​e​r​e​!​ ​�​�
		 */
		not_expected_title: string;
		/**
		 * Y​o​u​ ​a​r​e​ ​a​l​r​e​a​d​y​ ​d​o​n​e​ ​w​i​t​h​ ​t​h​e​ ​s​e​t​u​p​!​ ​N​o​t​h​i​n​g​ ​t​o​ ​d​o​.
		 */
		not_expected_desc: string;
		/**
		 * T​a​k​e​ ​m​e​ ​b​a​c​k
		 */
		not_expected_back: string;
		/**
		 * W​e​l​c​o​m​e
		 */
		progress_step1: string;
		/**
		 * C​r​e​a​t​e​ ​a​c​c​o​u​n​t
		 */
		progress_step2: string;
		/**
		 * D​o​n​e
		 */
		progress_step3: string;
	};
	toasts: {
		/**
		 * A​d​m​i​n​ ​s​a​v​e​d
		 */
		admin_saved: string;
		/**
		 * U​s​e​r​ ​s​a​v​e​d
		 */
		user_saved: string;
		/**
		 * U​s​e​r​ ​{​u​s​e​r​n​a​m​e​}​ ​c​r​e​a​t​e​d
		 * @param {unknown} username
		 */
		user_created: RequiredParams<'username'>;
		/**
		 * U​s​e​r​ ​{​u​s​e​r​n​a​m​e​}​ ​d​e​l​e​t​e​d
		 * @param {unknown} username
		 */
		user_deleted: RequiredParams<'username'>;
		/**
		 * S​a​v​e​d​ ​s​e​t​t​i​n​g​s
		 */
		settings_saved: string;
		/**
		 * P​a​s​s​w​o​r​d​ ​c​h​a​n​g​e​d​.​ ​P​l​e​a​s​e​ ​l​o​g​i​n​ ​a​g​a​i​n​.
		 */
		password_changed: string;
		/**
		 * P​a​s​s​w​o​r​d​s​ ​d​o​n​'​t​ ​m​a​t​c​h
		 */
		passwords_missmatch: string;
		/**
		 * P​e​r​m​i​s​s​i​o​n​s​ ​f​o​r​ ​{​u​s​e​r​n​a​m​e​}​ ​c​r​e​a​t​e​d
		 * @param {unknown} username
		 */
		permissions_created: RequiredParams<'username'>;
		/**
		 * P​e​r​m​i​s​s​i​o​n​s​ ​f​o​r​ ​{​u​s​e​r​n​a​m​e​}​ ​d​e​l​e​t​e​d
		 * @param {unknown} username
		 */
		permissions_deleted: RequiredParams<'username'>;
		/**
		 * P​e​r​m​i​s​s​i​o​n​s​ ​f​o​r​ ​{​u​s​e​r​n​a​m​e​}​ ​u​p​d​a​t​e​d
		 * @param {unknown} username
		 */
		permissions_updated: RequiredParams<'username'>;
		/**
		 * Y​o​u​r​ ​p​e​r​m​i​s​s​i​o​n​s​ ​h​a​v​e​ ​b​e​e​n​ ​u​p​d​a​t​e​d
		 */
		permissions_updated_personal: string;
		/**
		 * Y​o​u​ ​d​o​n​'​t​ ​h​a​v​e​ ​p​e​r​m​i​s​s​i​o​n​ ​t​o​ ​v​i​s​i​t​ ​{​u​r​l​}
		 * @param {unknown} url
		 */
		no_permission: RequiredParams<'url'>;
		/**
		 * C​r​e​a​t​e​d​ ​{​d​e​v​i​c​e​}
		 * @param {unknown} device
		 */
		device_created: RequiredParams<'device'>;
		/**
		 * C​r​e​a​t​e​d​ ​{​c​o​u​n​t​|​i​n​t​}​ ​d​e​v​i​c​e​s
		 * @param {unknown} count
		 */
		devices_created_multiple: RequiredParams<'count|int'>;
		/**
		 * U​p​d​a​t​e​d​ ​{​d​e​v​i​c​e​}
		 * @param {unknown} device
		 */
		device_updated: RequiredParams<'device'>;
		/**
		 * D​e​l​e​t​e​d​ ​{​d​e​v​i​c​e​}
		 * @param {unknown} device
		 */
		device_deleted: RequiredParams<'device'>;
		/**
		 * C​r​e​a​t​e​d​ ​g​r​o​u​p​ ​{​g​r​o​u​p​}
		 * @param {unknown} group
		 */
		group_created: RequiredParams<'group'>;
		/**
		 * D​e​l​e​t​e​d​ ​g​r​o​u​p​ ​{​g​r​o​u​p​}
		 * @param {unknown} group
		 */
		group_deleted: RequiredParams<'group'>;
	};
	navbar: {
		/**
		 * T​h​e​m​e
		 */
		theme: string;
		/**
		 * N​e​w
		 */
		new: string;
		/**
		 * E​d​i​t​ ​a​c​c​o​u​n​t
		 */
		edit_account: string;
		/**
		 * L​o​g​o​u​t
		 */
		logout: string;
	};
};

export type TranslationFunctions = {
	home: {
		/**
		 * Home
		 */
		page_title: () => LocalizedString;
		/**
		 * Groups
		 */
		order_groups: () => LocalizedString;
		/**
		 * Name
		 */
		order_name: () => LocalizedString;
		/**
		 * IP
		 */
		order_ip: () => LocalizedString;
		/**
		 * Order
		 */
		order_tooltip: () => LocalizedString;
		/**
		 * No devices here.
		 */
		no_devices: () => LocalizedString;
		/**
		 * Add your first device
		 */
		add_first_device: () => LocalizedString;
		/**
		 * Please ask the admin to grant you permissions to existing devices or to create new ones.
		 */
		grant_permissions: () => LocalizedString;
	};
	account: {
		/**
		 * Account
		 */
		page_title: () => LocalizedString;
		/**
		 * Admin
		 */
		account_type_admin: () => LocalizedString;
		/**
		 * User
		 */
		account_type_user: () => LocalizedString;
		/**
		 * Avatar
		 */
		avatar_title: () => LocalizedString;
		/**
		 * Language
		 */
		language_title: () => LocalizedString;
		/**
		 * Automatic
		 */
		language_option_auto: () => LocalizedString;
		/**
		 * Change password
		 */
		change_password_title: () => LocalizedString;
		/**
		 * After the password has been changed, you will need to log in again.
		 */
		change_password_body: () => LocalizedString;
		/**
		 * Old password
		 */
		change_password_label: () => LocalizedString;
		/**
		 * New password
		 */
		change_password_new: () => LocalizedString;
		/**
		 * Confirm password
		 */
		change_password_confirm: () => LocalizedString;
	};
	device: {
		/**
		 * New device
		 */
		page_title: () => LocalizedString;
		tabs: {
			/**
			 * Manual
			 */
			'0': () => LocalizedString;
			/**
			 * Network Scan
			 */
			'1': () => LocalizedString;
		};
		/**
		 * More
		 */
		card_btn_more: () => LocalizedString;
		/**
		 * Edit
		 */
		card_btn_more_edit: () => LocalizedString;
		/**
		 * Sleep
		 */
		card_btn_more_sleep: () => LocalizedString;
		/**
		 * Reboot
		 */
		card_btn_more_reboot: () => LocalizedString;
		/**
		 * Wake cron
		 */
		card_tooltip_wake_cron: () => LocalizedString;
		/**
		 * Shutdown cron
		 */
		card_tooltip_shutdown_cron: () => LocalizedString;
		/**
		 * Wake password
		 */
		card_tooltip_wake_password: () => LocalizedString;
		/**
		 * Last status change
		 */
		card_tooltip_last_status_change: () => LocalizedString;
		/**
		 * Password
		 */
		card_password: () => LocalizedString;
		/**
		 * Pending
		 */
		card_nic_tooltip_pending: () => LocalizedString;
		/**
		 * Shut down
		 */
		card_nic_tooltip_shutdown: () => LocalizedString;
		/**
		 * No shutdown command set
		 */
		card_nic_tooltip_shutdown_no_cmd: () => LocalizedString;
		/**
		 * No permission to shut down this device
		 */
		card_nic_tooltip_shutdown_no_permission: () => LocalizedString;
		/**
		 * Power on
		 */
		card_nic_tooltip_power: () => LocalizedString;
		/**
		 * No permission to power on this device
		 */
		card_nic_tooltip_power_no_permission: () => LocalizedString;
		/**
		 * General
		 */
		general: () => LocalizedString;
		/**
		 * Name
		 */
		general_name: () => LocalizedString;
		/**
		 * Device name
		 */
		general_name_placeholder: () => LocalizedString;
		/**
		 * IP
		 */
		general_ip: () => LocalizedString;
		/**
		 * Mac
		 */
		general_mac: () => LocalizedString;
		/**
		 * Netmask
		 */
		general_netmask: () => LocalizedString;
		/**
		 * required field
		 */
		general_required_field: () => LocalizedString;
		/**
		 * Ports
		 */
		ports: () => LocalizedString;
		/**
		 * UpSnap can also check if given ports are open.
		 */
		ports_desc: () => LocalizedString;
		/**
		 * Add new port
		 */
		ports_add_new: () => LocalizedString;
		/**
		 * Name
		 */
		ports_name: () => LocalizedString;
		/**
		 * Number
		 */
		ports_number: () => LocalizedString;
		/**
		 * Link
		 */
		link: () => LocalizedString;
		/**
		 * Makes your device name a clickable link, perfect for linking a dashboard for example.
		 */
		link_desc: () => LocalizedString;
		/**
		 * Wake
		 */
		wake: () => LocalizedString;
		/**
		 * You can power this device using a scheduled cron job.
		 */
		wake_desc: () => LocalizedString;
		/**
		 * Wake cron
		 */
		wake_cron: () => LocalizedString;
		/**
		 * Enable wake cron
		 */
		wake_cron_enable: () => LocalizedString;
		/**
		 * Sleep-On-LAN
		 */
		sol: () => LocalizedString;
		/**
		 * You can put computers to sleep using the <a class="link" href="https://github.com/SR-G/sleep-on-lan" target="_blank">Sleep-On-LAN</a> tool. Sleep-On-LAN (SOL) is an external tool/daemon that operates on the PCs you want to put to sleep, providing a REST endpoint. For instructions on setting up Sleep-On-LAN, please refer to the <a href="https://github.com/SR-G/sleep-on-lan#usage" class="link" target="_blank">Usage</a> section.
		 */
		sol_desc1: () => LocalizedString;
		/**
		 * SOL is configured to send requests over HTTP instead of UDP to enable authorization and make requests more reliable.
		 */
		sol_desc2: () => LocalizedString;
		/**
		 * Therefore, please ensure that you include <span class="badge">HTTP:&lt;YOURPORT&gt;</span> in the <span class="badge">Listeners</span> section of the <a href="https://github.com/SR-G/sleep-on-lan#configuration" class="link" target="_blank">SOL configuration</a>.
		 */
		sol_desc3: () => LocalizedString;
		/**
		 * Enable Sleep-On-LAN
		 */
		sol_enable: () => LocalizedString;
		/**
		 * SOL Port
		 */
		sol_port: () => LocalizedString;
		/**
		 * Authorization
		 */
		sol_authorization: () => LocalizedString;
		/**
		 * SOL User
		 */
		sol_user: () => LocalizedString;
		/**
		 * SOL Password
		 */
		sol_password: () => LocalizedString;
		/**
		 * Shutdown
		 */
		shutdown: () => LocalizedString;
		/**
		 * This <strong>shell command</strong> will run inside your container (if you use docker) or on your host (if you use the binary). To verify that works you can run the command inside the container or on your host shell first. Common commands are <span class="badge">net rpc</span> for windows, <span class="badge">sshpass</span> for linux or <span class="badge">curl</span> in general to make web requests.
		 */
		shutdown_desc: () => LocalizedString;
		/**
		 * Examples:
		 */
		shutdown_examples: () => LocalizedString;
		/**
		 * Shutdown remote windows machine:
		 */
		shutdown_examples_windows: () => LocalizedString;
		/**
		 * Shutdown remote linux machine:
		 */
		shutdown_examples_linux: () => LocalizedString;
		/**
		 * Shutdown command
		 */
		shutdown_cmd: () => LocalizedString;
		/**
		 * Just like setting a cron to wake the device, you can also schedule a cron job to shut down this device.
		 */
		shutdown_cron_desc: () => LocalizedString;
		/**
		 * Shutdown cron
		 */
		shutdown_cron: () => LocalizedString;
		/**
		 * Enable shutdown cron
		 */
		shutdown_cron_enable: () => LocalizedString;
		/**
		 * Password
		 */
		password: () => LocalizedString;
		/**
		 * Some network cards have the option to set a password for magic packets, also called <span class="badge">SecureON</span>. Password can only be 0, 4 or 6 characters in length.
		 */
		password_desc: () => LocalizedString;
		/**
		 * Groups
		 */
		groups: () => LocalizedString;
		/**
		 * You can add devices to a group to have them sorted by group on the dashboard.
		 */
		groups_desc: () => LocalizedString;
		/**
		 * e.g. 'Basement' or 'Office'
		 */
		groups_placeholder: () => LocalizedString;
		/**
		 * Scan range saved
		 */
		network_scan_range_saved: () => LocalizedString;
		/**
		 * Automatically scan your network for devices. For this to work, you need to run UpSnap as root/admin and have nmap installed and available in your $PATH (For docker users, thats already the case and you don't need to do anything). Scanning might take some seconds.
		 */
		network_scan_desc: () => LocalizedString;
		/**
		 * IP range
		 */
		network_scan_ip_range: () => LocalizedString;
		/**
		 * No scan range
		 */
		network_scan_no_range: () => LocalizedString;
		/**
		 * Unsaved changes
		 */
		network_scan_unsaved_changes: () => LocalizedString;
		/**
		 * Scan running
		 */
		network_scan_running: () => LocalizedString;
		/**
		 * Scan
		 */
		network_scan: () => LocalizedString;
		/**
		 * IP:
		 */
		network_scan_ip: () => LocalizedString;
		/**
		 * Mac:
		 */
		network_scan_mac: () => LocalizedString;
		/**
		 * Mac vendor:
		 */
		network_scan_mac_vendor: () => LocalizedString;
		/**
		 * Netmask:
		 */
		network_scan_netmask: () => LocalizedString;
		/**
		 * Add all devices
		 */
		network_scan_add_all: () => LocalizedString;
		/**
		 * Replace netmask for all devices?
		 */
		network_scan_replace_netmask: () => LocalizedString;
		/**
		 * New netmask
		 */
		network_scan_new_netmask: () => LocalizedString;
		/**
		 * Include devices where name is "Unknown"
		 */
		network_scan_include_unknown: () => LocalizedString;
	};
	login: {
		/**
		 * Welcome
		 */
		welcome: () => LocalizedString;
		/**
		 * Email or Username:
		 */
		email_label: () => LocalizedString;
		/**
		 * Password:
		 */
		password_label: () => LocalizedString;
		/**
		 * More
		 */
		btn_more: () => LocalizedString;
		/**
		 * Other Auth Providers
		 */
		menu_title_auth_providers: () => LocalizedString;
		/**
		 * Login
		 */
		btn_login: () => LocalizedString;
	};
	settings: {
		/**
		 * Settings
		 */
		page_title: () => LocalizedString;
		/**
		 * Ping interval
		 */
		ping_interval_title: () => LocalizedString;
		/**
		 * Sets the interval in which the devices are pinged. Leave blank to use default value of <span class="badge">@every 3s</span>.
		 */
		ping_interval_desc1: () => LocalizedString;
		/**
		 * Learn more about the correct syntax for cron on <a class="link" href="https://en.wikipedia.org/wiki/Cron" target="_blank">Wikipedia</a> or refer to the <a class="link" href="https://pkg.go.dev/github.com/robfig/cron/v3" target="_blank">package documentation</a>.
		 */
		ping_interval_desc2: () => LocalizedString;
		/**
		 * Lazy ping
		 */
		lazy_ping_title: () => LocalizedString;
		/**
		 * When lazy ping is turned on, UpSnap will only ping devices if there is an active user visiting the website. If it's turned off, UpSnap will always ping devices.
		 */
		lazy_ping_desc: () => LocalizedString;
		/**
		 * Enable
		 */
		lazy_ping_enable: () => LocalizedString;
		/**
		 * Website title
		 */
		website_title_title: () => LocalizedString;
		/**
		 * Sets the title of the website and in the browser tab.
		 */
		website_title_desc: () => LocalizedString;
		/**
		 * Icon
		 */
		icon_title: () => LocalizedString;
		/**
		 * Set a custom favicon. Supported file types are:
		 */
		icon_desc: () => LocalizedString;
		/**
		 * UpSnap version
		 */
		upsnap_version: () => LocalizedString;
	};
	users: {
		/**
		 * Users
		 */
		page_title: () => LocalizedString;
		/**
		 * Allow {username} to create new devices and edit device groups
		 */
		allow_create_devices: (arg: { username: unknown }) => LocalizedString;
		/**
		 * Device permissions
		 */
		device_permissions: () => LocalizedString;
		/**
		 * Create new device
		 */
		create_new_device: () => LocalizedString;
		/**
		 * Read
		 */
		read: () => LocalizedString;
		/**
		 * Update
		 */
		update: () => LocalizedString;
		/**
		 * Delete
		 */
		delete: () => LocalizedString;
		/**
		 * Power
		 */
		power: () => LocalizedString;
		/**
		 * Toggle
		 */
		toggle: () => LocalizedString;
		/**
		 * Confirm delete
		 */
		confirm_delete_title: () => LocalizedString;
		/**
		 * Are you sure you want to delete {username}?
		 */
		confirm_delete_desc: (arg: { username: unknown }) => LocalizedString;
		/**
		 * Create new user
		 */
		create_new_user: () => LocalizedString;
		/**
		 * Username
		 */
		username: () => LocalizedString;
		/**
		 * Password
		 */
		password: () => LocalizedString;
		/**
		 * Password confirm
		 */
		password_confirm: () => LocalizedString;
		/**
		 * required field
		 */
		required_field: () => LocalizedString;
	};
	buttons: {
		/**
		 * Save
		 */
		save: () => LocalizedString;
		/**
		 * Delete
		 */
		delete: () => LocalizedString;
		/**
		 * Change
		 */
		change: () => LocalizedString;
		/**
		 * Reset
		 */
		reset: () => LocalizedString;
		/**
		 * Cancel
		 */
		cancel: () => LocalizedString;
		/**
		 * Add
		 */
		add: () => LocalizedString;
	};
	welcome: {
		/**
		 * Welcome to UpSnap 🥳
		 */
		step1_page_title: () => LocalizedString;
		/**
		 * Please complete the following steps to finish the setup.
		 */
		step1_setup_desc: () => LocalizedString;
		/**
		 * Next
		 */
		step1_setup_btn_next: () => LocalizedString;
		/**
		 * Create an admin account
		 */
		step2_page_title: () => LocalizedString;
		/**
		 * Email:
		 */
		step2_label_email: () => LocalizedString;
		/**
		 * Password:
		 */
		step2_label_password: () => LocalizedString;
		/**
		 * min. 10 characters
		 */
		step2_label_min_chars: () => LocalizedString;
		/**
		 * Password confirm:
		 */
		step2_label_password_confirm: () => LocalizedString;
		/**
		 * Create
		 */
		step2_btn_create: () => LocalizedString;
		/**
		 * You are all set! 🎉
		 */
		step3_page_title: () => LocalizedString;
		/**
		 * Go ahead and add some devices to your dashboard.
		 */
		step3_page_desc: () => LocalizedString;
		/**
		 * Lets go!
		 */
		step3_btn_done: () => LocalizedString;
		/**
		 * I didn't expect you here! 🧐
		 */
		not_expected_title: () => LocalizedString;
		/**
		 * You are already done with the setup! Nothing to do.
		 */
		not_expected_desc: () => LocalizedString;
		/**
		 * Take me back
		 */
		not_expected_back: () => LocalizedString;
		/**
		 * Welcome
		 */
		progress_step1: () => LocalizedString;
		/**
		 * Create account
		 */
		progress_step2: () => LocalizedString;
		/**
		 * Done
		 */
		progress_step3: () => LocalizedString;
	};
	toasts: {
		/**
		 * Admin saved
		 */
		admin_saved: () => LocalizedString;
		/**
		 * User saved
		 */
		user_saved: () => LocalizedString;
		/**
		 * User {username} created
		 */
		user_created: (arg: { username: unknown }) => LocalizedString;
		/**
		 * User {username} deleted
		 */
		user_deleted: (arg: { username: unknown }) => LocalizedString;
		/**
		 * Saved settings
		 */
		settings_saved: () => LocalizedString;
		/**
		 * Password changed. Please login again.
		 */
		password_changed: () => LocalizedString;
		/**
		 * Passwords don't match
		 */
		passwords_missmatch: () => LocalizedString;
		/**
		 * Permissions for {username} created
		 */
		permissions_created: (arg: { username: unknown }) => LocalizedString;
		/**
		 * Permissions for {username} deleted
		 */
		permissions_deleted: (arg: { username: unknown }) => LocalizedString;
		/**
		 * Permissions for {username} updated
		 */
		permissions_updated: (arg: { username: unknown }) => LocalizedString;
		/**
		 * Your permissions have been updated
		 */
		permissions_updated_personal: () => LocalizedString;
		/**
		 * You don't have permission to visit {url}
		 */
		no_permission: (arg: { url: unknown }) => LocalizedString;
		/**
		 * Created {device}
		 */
		device_created: (arg: { device: unknown }) => LocalizedString;
		/**
		 * Created {count|int} devices
		 */
		devices_created_multiple: (arg: { count: unknown }) => LocalizedString;
		/**
		 * Updated {device}
		 */
		device_updated: (arg: { device: unknown }) => LocalizedString;
		/**
		 * Deleted {device}
		 */
		device_deleted: (arg: { device: unknown }) => LocalizedString;
		/**
		 * Created group {group}
		 */
		group_created: (arg: { group: unknown }) => LocalizedString;
		/**
		 * Deleted group {group}
		 */
		group_deleted: (arg: { group: unknown }) => LocalizedString;
	};
	navbar: {
		/**
		 * Theme
		 */
		theme: () => LocalizedString;
		/**
		 * New
		 */
		new: () => LocalizedString;
		/**
		 * Edit account
		 */
		edit_account: () => LocalizedString;
		/**
		 * Logout
		 */
		logout: () => LocalizedString;
	};
};

export type Formatters = {
	int: (value: unknown) => unknown;
};
