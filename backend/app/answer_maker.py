from ..lib.utils.file_merger import pdf_merger
from ..lib.utils.file_converter import pdf_to_png
from ..lib.utils.json_reader import check_file, read_data
from ..lib.utils import create_directory

from ..lib.sheet_maker.maker import png_template_exists, make_files
from ..lib.sheet_maker.img_handler import composite_multiple_images

from pathlib import Path
from PIL import Image

# Remake of the classifier sheet_maker.main() in order to better suit the flask Api
# The best solution would be to have a classifier-CLI and a classifier-core
# and use classifier-core in this module. This could be for future work, but for
# now is out of the scope

def maker(data: dict) -> bool:
  # data = ['course', 'evaluation', 'lower_bound', 'upper_bound', 'template', 'answers_dir', 'template_dir']
  answer_dir = Path(data['answer_dir']) # full path where answer sheets will be stored
  template_dir = Path(data['template_dir']) # full template path included filename
  template_filepath = template_dir / data['template']

  print('------')
  print(str(template_filepath))

  create_directory(str(answer_dir)) if not answer_dir.exists() else None
  create_directory(str(template_dir)) if not template_dir.exists() else None
  
  # Change file to png if template is in pdf
  if template_filepath.suffix == 'pdf':
    print('ERROR: Found template in .pdf format.\nConverting template to .png format...')
    pdf_to_png(str(template_dir))

  # Add template_filepath to data in order that it works on make_files
  data['template_filepath'] = str(template_filepath)

  files = make_files(data, _save_file=False)
  answer_sheets = composite_multiple_images(files, _save_pages=False, _save_path=answer_dir)
  answer_filename = f'{data["course"]}_{data["lower_bound"]}_{data["upper_bound"]}.pdf'
  pdf_merger(answer_sheets, str(answer_dir / answer_filename))

  return True