/*
 * (C) Copyright HCL Technologies Ltd. 2018
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = function(ldr, name, req) {
	return Promise.resolve(ldr).then(function(loader) {
		return new Promise(function(resolve) {
			loader.load(req.toAbsMid(name),  req, function(data) {
				resolve(data);
			}, {isBuild:true});
		});
	});
};