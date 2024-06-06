import $api from "../http";

export default class LectureService {
    static async getSidebarInfo(subject) {
        return $api.get(`/lectures/themes?subject=${subject}`)
    }

    static async getContentOfGlobalName(globalName) {
        return $api.get(`/lectures/ukr_mova/global_theme?globalName=${globalName}`)
    }

    static async getContentOfLecture(themeName) {
        return $api.get(`/lectures/ukr_mova/theme?themeName=${themeName}`)
    }

}