import http from '@/utils/http'

import { NotepadContent } from "@/views/index/Notepad/type";
export const changelog = async ():Promise<NotepadContent> =>
{
    const title = "Changelog"
    return http.get('https://api.github.com/repos/HydroRoll-Team/HydroRoll/releases/latest')
      .then(res => {
        const message = "## " + res.data['tag_name'] + "\n" + res.data['body'];
        return new NotepadContent(title,message)
      })
      .catch(err => {
        console.log(err)
        return new NotepadContent(title,err.toString())
      })
}
