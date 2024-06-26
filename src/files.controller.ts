import {Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('files')
export class FilesController{
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file) {
        if(file) {
            return {message: 'File Uploaded'}
        }
        else if(Error) {
            console.log(Error)
        }
       
    }
}