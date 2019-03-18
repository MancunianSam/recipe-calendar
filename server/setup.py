from setuptools import setup

setup(
    name='recipes',
    packages=['recipes'],
    include_package_data=True,
    install_requires=[
        'flask', 'waitress', 'flask-sqlalchemy', 'flask-cors', 'coverage'
    ],
)
