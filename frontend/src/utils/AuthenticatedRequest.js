import { store } from '../index'
import ApiRequest from './Request'

export default class AuthenticatedRequest extends ApiRequest {
	constructor(endpoint) {
		super(endpoint)
	}
	get(params = {}) {
		return super.get(params, { authorization: store.getState().session.token })
	}
	post(body = {}, headers = {}, options = {}) {
		return super.post(body, headers, options, { authorization: store.getState().session.token })
	}
	put(body = {}, headers = {}, options = {}) {
		return super.post(body, headers, options, { authorization: store.getState().session.token })
	}
	delete(body = {}, headers = {}, options = {}) {
		return super.delete(body, headers, options, {
			authorization: store.getState().session.token,
		})
	}
}
