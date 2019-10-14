from time import time, asctime, localtime
import os
import sys
import io
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), os.path.pardir)))


from utils.log import cool_print_decoration, cool_print, print_invalid_file
from utils.file_merger import pdf_merger
from utils.file_converter import pdf_to_png
from utils.json_reader import check_file, read_data
from utils import create_directory

from .maker import png_template_exists, make_files
from .img_handler import composite_multiple_images

from PIL import Image

TEMPLATE_DIRECTORY = 'TEMPLATES'

def main(_data: dict) -> int:

    # _data = read_data(_file) if check_file(_file) else {}
    
    if not _data:
        print_invalid_file(_file)
        return 0
    
    COURSE_NAME = _data['course']
    EVALUATION = _data['evaluation']

    create_directory(f'{os.getcwd()}/ANSWER_SHEETS/') if not os.path.exists(f'{os.getcwd()}/ANSWER_SHEETS/') else None
    ANSWER_SHEETS_DIR_PATH = f'{os.getcwd()}/ANSWER_SHEETS/{COURSE_NAME}_{EVALUATION}'
    _current_time = asctime(localtime(time()))
    
    if png_template_exists(f'{TEMPLATE_DIRECTORY}/{_data["template"]}'):
        pdf_to_png(f'{TEMPLATE_DIRECTORY}/{_data["template"]}.pdf')

    create_directory(ANSWER_SHEETS_DIR_PATH) if not os.path.exists(ANSWER_SHEETS_DIR_PATH) else None
    _data['template'] = f'{TEMPLATE_DIRECTORY}/{_data["template"]}.png'
    _files = make_files(_data, _save_file=False)
    _answer_sheets = composite_multiple_images(_files, _save_pages=False, _save_path=ANSWER_SHEETS_DIR_PATH)
    
    pdf_merger(_answer_sheets, f'{ANSWER_SHEETS_DIR_PATH}/compilation.pdf')
    return 1


if __name__ == '__main__':
    main()