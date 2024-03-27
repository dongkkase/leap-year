<?php
echo date("L", strtotime("2019-01-01")); // 0
echo date("L", strtotime("2020-01-01")); // 1
echo date("L", strtotime("2021-01-01")); // 0
echo date("L", strtotime("2022-01-01")); // 0
echo date("L", strtotime("2023-01-01")); // 0
echo date("L", strtotime("2024-01-01")); // 1
 
if (date("L", strtotime("2020-01-01")) == true)
{
    echo "윤년입니다.";
}