import $http from '../http.js';
export const get_label = (data) => {
	// 请求云函数
	return $http({
		url: 'get_label',
		data
	})
}

export const get_list = (data) => {
	// 请求云函数
	return $http({
		url: 'get_list',
		data
	})
}

export const update_like = (data) => {
	return $http({
		url: 'update_like',
		data
	})
}

export const get_search = (data) => {
	return $http({
		url: 'get_search',
		data
	})
}

export const update_label = (data) => {
	return $http({
		url: 'update_label',
		data
	})
}

export const get_detail = (data) => {
	return $http({
		url: "get_detail",
		data
	})
}

export const update_comment = (data) => {
	return $http({
		url: 'update_comment',
		data
	})
}

export const get_comments = (data) => {
	return $http({
		url: 'get_comments',
		data
	})
}

export const update_author = (data) => {
	return $http({
		url: 'update_author',
		data
	})
}

export const update_thumbs_up = (data) => {
	return $http({
		url: 'update_thumbs_up',
		data
	})
}

export const get_follow = (data) => {
	return $http({
		url: 'get_follow',
		data
	})
}

export const get_author = (data) => {
	return $http({
		url: 'get_author',
		data
	})
}