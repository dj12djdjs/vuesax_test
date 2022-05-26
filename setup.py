from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in vuesax_test/__init__.py
from vuesax_test import __version__ as version

setup(
	name="vuesax_test",
	version=version,
	description="test",
	author="test",
	author_email="test",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
