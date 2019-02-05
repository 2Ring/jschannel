export default class Channel {
	static build(config: ChannelConfig): Channel;

	bind: (method: string, callback: (trans?: ChannelTransaction, params?: any) => any) => void;
	call: (request: ChannelRemoteMethodRequest) => void;
	unbind: (method: string) => void;
	notify: (request: ChannelNotifyRequest) => void;
	destroy: () => void;
}

declare interface ChannelConfig {
	window: Window;
	origin: string;
	scope: string;
	onReady?: () => void;
}

declare interface ChannelTransaction {
	delayReturn: (delay: boolean) => void;
	complete: (params?: any) => void;
	error: (params?: any) => void;
}

declare interface ChannelNotificationContext {
	origin: string;
}

declare interface ChannelRemoteMethodRequest {
	method: string;
	success: (params?: any) => void;
	params?: any;
	error?: (params?: any) => void;
}

declare interface ChannelNotifyRequest {
	method: string;
	params?: any;
}
