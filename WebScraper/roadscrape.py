from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Edge()
driver.get("https://data.gov.in/major-indicator/total-road-length-category-roads")

driver.find_element_by_id('ui-id-3').click()
time.sleep(20)

data = 
print(data)

driver.close()